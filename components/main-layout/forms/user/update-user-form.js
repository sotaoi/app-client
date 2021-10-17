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
exports.UpdateUserForm = void 0;
const react_1 = __importDefault(require("react"));
const user_commands_1 = require("@app/client/commands/user-commands");
const UpdateUserForm = (props) => {
    const Form = props.form;
    const fields = Form.getFields();
    return (react_1.default.createElement("section", { style: { margin: 20 } },
        react_1.default.createElement(Form.FormComponent, null,
            react_1.default.createElement("button", { disabled: !Form.getFormState().canSubmit, type: 'submit' }, "Update User"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            react_1.default.createElement("button", { onClick: () => Form.reset(), type: 'button' }, "Reset"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            fields.email.wasTouched() &&
                fields.email.getErrors().map((error, index) => (react_1.default.createElement("div", { key: index, style: { color: '#ff3333', marginBottom: 10 } }, error))),
            react_1.default.createElement(fields.email.component, { className: 'px-3 py-3 placeholder-gray-400 text-gray-700 relativ bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline', placeholder: 'email' }),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            fields.name.wasTouched() &&
                fields.name.getErrors().map((error, index) => (react_1.default.createElement("div", { key: index, style: { color: '#ff3333', marginBottom: 10 } }, error))),
            react_1.default.createElement(fields.name.component, { className: 'px-3 py-3 placeholder-gray-400 text-gray-700 relativ bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline', placeholder: 'name' }),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            fields.avatar.wasTouched() &&
                fields.avatar.getErrors().map((error, index) => (react_1.default.createElement("div", { key: index, style: { color: '#ff3333', marginBottom: 10 } }, error))),
            react_1.default.createElement(fields.avatar.component, { className: 'w-full p-2 mb-6 text-black border-b-2 border-green-500 outline-none focus:bg-gray-300' }),
            !fields.avatar.isEmpty() && (react_1.default.createElement("button", { onClick: () => fields.avatar.clear(), type: 'button' }, "Clear avatar")),
            fields.avatar.getPreview() && (react_1.default.createElement("div", null,
                react_1.default.createElement("img", { src: fields.avatar.getPreview(), style: { maxWidth: 200, maxHeight: 200 } }))),
            react_1.default.createElement("br", null),
            react_1.default.createElement("hr", null),
            react_1.default.createElement("button", { className: 'bg-transparent text-red-600 font-semibold hover:text-white py-1 px-3 mx-0 my-2 border border-red-400 hover:border-transparent rounded', onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                    const conclusion = yield user_commands_1.removeUserCommand(props.form.uuid, null);
                    conclusion.notify('/user/list/all');
                }), type: 'button' }, "Remove User"),
            react_1.default.createElement("hr", null),
            react_1.default.createElement("button", { disabled: !Form.getFormState().canSubmit, type: 'submit' }, "Update User"))));
};
exports.UpdateUserForm = UpdateUserForm;
