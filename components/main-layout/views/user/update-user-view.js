"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserView = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@sotaoi/client/components");
const forms_1 = require("@sotaoi/client/forms");
const artifacts_1 = require("@sotaoi/omni/artifacts");
const router_1 = require("@sotaoi/client/router");
const user_queries_1 = require("@app/client/queries/user-queries");
const update_user_form_1 = require("@app/client/components/main-layout/forms/user/update-user-form");
const input_field_1 = require("@sotaoi/client/forms/fields/input-field");
const file_field_1 = require("@sotaoi/client/forms/fields/file-field");
const validation_queries_1 = require("@app/client/queries/validation-queries");
class UpdateUserView extends components_1.ViewComponent {
    promises() {
        return {
            user: user_queries_1.getUser(),
            validations: validation_queries_1.getUserUpdateFormValidations(),
        };
    }
    init({ results, props }) {
        const user = results.user.record;
        const registerUserFormConstructor = forms_1.FormConstructor({
            email: input_field_1.InputField.input(user.email),
            name: input_field_1.InputField.input(user.name),
            // add user password change
            avatar: file_field_1.FileField.input(user.avatar),
        }, results.validations);
        const Form = forms_1.UpdateFormFactory(null, new artifacts_1.Artifacts(), null, 'user', registerUserFormConstructor, props.uuid);
        Form.init();
        react_1.default.useEffect(() => () => Form.destroy(), []);
        Form.onCommandSuccess((result) => __awaiter(this, void 0, void 0, function* () {
            if (!result.artifact) {
                throw new Error('something went wrong');
            }
            router_1.pushRoute(`/user/view/${result.artifact.uuid}`);
        }));
        return {
            form: Form,
        };
    }
    web(data) {
        const { form } = this.init(data);
        return react_1.default.createElement(update_user_form_1.UpdateUserForm, { form: form });
    }
    mobile() {
        return null;
    }
    electron() {
        return null;
    }
}
exports.UpdateUserView = UpdateUserView;
