"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@sotaoi/client/components");
const user_view_1 = require("@app/client/components/main-layout/views/user/user-view");
class UserRoute extends components_1.RouteComponent {
    display({ params }) {
        return react_1.default.createElement(user_view_1.UserView, { uuid: params.uuid });
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
exports.UserRoute = UserRoute;
