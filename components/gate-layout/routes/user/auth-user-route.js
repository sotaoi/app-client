"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserRoute = void 0;
const components_1 = require("@sotaoi/client/components");
const errors_1 = require("@app/client/errors");
const auth_user_view_1 = require("@app/client/components/gate-layout/views/user/auth-user-view");
class AuthUserRoute extends components_1.RouteCpComponent {
    display({ params }) {
        if (['user'].indexOf(params.repository) === -1) {
            throw new errors_1.Errors.InvalidGateRepository();
        }
        return this.extendedView(auth_user_view_1.AuthUserView, {});
    }
}
exports.AuthUserRoute = AuthUserRoute;
