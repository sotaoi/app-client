import { RequestAbortHandler } from '@sotaoi/client/components';
import { FormValidations } from '@sotaoi/omni/input/base-input';
declare const getUserStoreFormValidations: () => (props: {
    [key: string]: any;
}, requestAbortHandler: RequestAbortHandler) => Promise<FormValidations>;
declare const getUserUpdateFormValidations: () => (props: {
    [key: string]: any;
}, requestAbortHandler: RequestAbortHandler) => Promise<FormValidations>;
declare const getAuthUserFormValidations: () => (props: {
    [key: string]: any;
}, requestAbortHandler: RequestAbortHandler) => Promise<FormValidations>;
export { getAuthUserFormValidations, getUserStoreFormValidations, getUserUpdateFormValidations };
