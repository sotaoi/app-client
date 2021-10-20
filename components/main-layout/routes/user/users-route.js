"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoute = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@sotaoi/client/components");
const users_view_1 = require("@app/client/components/main-layout/views/user/users-view");
class UsersRoute extends components_1.RouteComponent {
    display(props) {
        return react_1.default.createElement(users_view_1.UsersView, null);
    }
    web(props) {
        return this.display(props);
    }
    mobile(props) {
        return this.display(props);
    }
    electron(props) {
        return this.display(props);
    }
}
exports.UsersRoute = UsersRoute;