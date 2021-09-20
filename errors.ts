import { Errors, ErrorException } from '@sotaoi/omni/errors';

// custom errors
Errors.Custom = class CustomError extends ErrorException {};

export { Errors };
