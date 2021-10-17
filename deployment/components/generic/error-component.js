"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorComponent = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const router_1 = require("@sotaoi/client/router");
const errors_1 = require("@app/client/errors");
const helper_1 = require("@sotaoi/client/helper");
const ErrorComponent = (props) => {
    var _a, _b;
    switch (true) {
        case helper_1.Helper.isWeb():
            switch (true) {
                // gate errors
                case props.error instanceof errors_1.Errors.InvalidGateRepository:
                    return react_1.default.createElement("section", null, "Error: invalid register repository");
                // generic errors
                case props.error instanceof errors_1.Errors.NotFoundView:
                    return (react_1.default.createElement("section", { className: 'p-4' },
                        react_1.default.createElement("h2", null, "Not Found"),
                        react_1.default.createElement("hr", null),
                        react_1.default.createElement("p", null, "We did not find what you were looking for")));
                case props.error instanceof errors_1.Errors.ComponentFail:
                    return react_1.default.createElement("section", null, "Error encountered");
                case props.error instanceof errors_1.Errors.NotFoundLayout:
                    return (react_1.default.createElement("section", { style: { display: 'flex', flex: 1, fontSize: 20, justifyContent: 'center', alignItems: 'center' } },
                        react_1.default.createElement(router_1.Link, { to: '/' }, "Page Not Found")));
                default:
                    return (react_1.default.createElement("section", { style: { display: 'flex', flex: 1, fontSize: 50, justifyContent: 'center', alignItems: 'center' } },
                        react_1.default.createElement(router_1.Link, { to: '/' }, ((_a = props.error) === null || _a === void 0 ? void 0 : _a.message) || '???')));
            }
        case helper_1.Helper.isMobile():
            return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                react_1.default.createElement(react_native_1.Text, { style: { fontSize: 50 } }, ((_b = props.error) === null || _b === void 0 ? void 0 : _b.message) || '???')));
        case helper_1.Helper.isElectron():
            // nothing here yet
            return null;
        default:
            throw new Error('Unknown environment');
    }
};
exports.ErrorComponent = ErrorComponent;
