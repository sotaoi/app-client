"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserUpdateFormValidations = exports.getUserStoreFormValidations = exports.getAuthUserFormValidations = void 0;
const { user } = require('@app/omni/forms/user-forms');
const getUserStoreFormValidations = () => {
    return (props, requestAbortHandler) => user['user-register-form']();
};
exports.getUserStoreFormValidations = getUserStoreFormValidations;
const getUserUpdateFormValidations = () => {
    return (props, requestAbortHandler) => user['user-update-form']();
};
exports.getUserUpdateFormValidations = getUserUpdateFormValidations;
const getAuthUserFormValidations = () => {
    return (props, requestAbortHandler) => user['auth-user-form']();
};
exports.getAuthUserFormValidations = getAuthUserFormValidations;
