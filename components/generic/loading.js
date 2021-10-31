"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const helper_1 = require("@sotaoi/client/helper");
const Loading = () => {
    switch (true) {
        case helper_1.Helper.isWeb():
            return (react_1.default.createElement("section", { style: { display: 'flex', flex: 1, fontSize: 75, justifyContent: 'center', alignItems: 'center' } }, "..."));
        case helper_1.Helper.isMobile():
            return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
                react_1.default.createElement(react_native_1.StatusBar, { barStyle: 'dark-content' }),
                react_1.default.createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                    react_1.default.createElement(react_native_1.Text, { style: { fontSize: 65 } }, "..."))));
        case helper_1.Helper.isElectron():
            // nothing here yet
            return null;
        default:
            throw new Error('Unknown environment');
    }
};
exports.Loading = Loading;
