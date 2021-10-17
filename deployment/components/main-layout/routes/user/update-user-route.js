"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserRoute = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@sotaoi/client/components");
const update_user_view_1 = require("@app/client/components/main-layout/views/user/update-user-view");
class UpdateUserRoute extends components_1.RouteComponent {
    display({ params }) {
        return react_1.default.createElement(update_user_view_1.UpdateUserView, { uuid: params.uuid });
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
exports.UpdateUserRoute = UpdateUserRoute;
