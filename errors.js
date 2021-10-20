"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
const errors_1 = require("@sotaoi/omni/errors");
Object.defineProperty(exports, "Errors", { enumerable: true, get: function () { return errors_1.Errors; } });
// custom errors
errors_1.Errors.Custom = class CustomError extends errors_1.ErrorException {
};
