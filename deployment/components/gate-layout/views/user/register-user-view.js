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
exports.RegisterUserView = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@sotaoi/client/components");
const forms_1 = require("@sotaoi/client/forms");
const artifacts_1 = require("@sotaoi/omni/artifacts");
const input_field_1 = require("@sotaoi/client/forms/fields/input-field");
const file_field_1 = require("@sotaoi/client/forms/fields/file-field");
const validation_queries_1 = require("@app/client/queries/validation-queries");
const store_1 = require("@sotaoi/client/store");
class RegisterUserView extends components_1.ViewComponent {
    promises() {
        return {
            validations: validation_queries_1.getUserStoreFormValidations(),
        };
    }
    init({ results, props }) {
        const RegisterUserFormConstructor = forms_1.FormConstructor({
            email: input_field_1.InputField.input(''),
            password: input_field_1.InputField.input(''),
            name: input_field_1.InputField.input(null),
            avatar: file_field_1.FileField.input(null),
        }, results.validations);
        const Form = forms_1.StoreFormFactory(null, new artifacts_1.Artifacts(), null, 'user', RegisterUserFormConstructor);
        Form.init();
        Form.onCommandSuccess((result) => __awaiter(this, void 0, void 0, function* () {
            if (!result.artifact) {
                throw new Error('something went wrong');
            }
            const artifact = result.artifact;
            const authRecord = new artifacts_1.AuthRecord(artifact.domainSignature, artifact.repository, artifact.uuid, artifact.createdAt, artifact.active, {});
            yield store_1.store().setAuthRecord(authRecord, artifact.pocket.accessToken);
        }));
        react_1.default.useEffect(() => () => Form.destroy(), []);
        return { form: Form };
    }
}
exports.RegisterUserView = RegisterUserView;
