import { RequestAbortHandler } from '@sotaoi/client/components';
import { FormValidations } from '@sotaoi/omni/input/base-input';

const { user } = require('@app/omni/forms/user-forms');

const getUserStoreFormValidations = () => {
  return (props: { [key: string]: any }, requestAbortHandler: RequestAbortHandler): Promise<FormValidations> =>
    user['user-register-form']();
};

const getUserUpdateFormValidations = () => {
  return (props: { [key: string]: any }, requestAbortHandler: RequestAbortHandler): Promise<FormValidations> =>
    user['user-update-form']();
};

const getAuthUserFormValidations = () => {
  return (props: { [key: string]: any }, requestAbortHandler: RequestAbortHandler): Promise<FormValidations> =>
    user['auth-user-form']();
};

export { getAuthUserFormValidations, getUserStoreFormValidations, getUserUpdateFormValidations };
