"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserRoute = void 0;
const components_1 = require("@sotaoi/client/components");
const errors_1 = require("@app/client/errors");
const register_user_view_1 = require("@app/client/components/gate-layout/views/user/register-user-view");
class RegisterUserRoute extends components_1.RouteCpComponent {
    display({ params }) {
        if (['user'].indexOf(params.repository) === -1) {
            throw new errors_1.Errors.InvalidGateRepository();
        }
        return this.extendedView(register_user_view_1.RegisterUserView, { filters: params.filters || null });
    }
}
exports.RegisterUserRoute = RegisterUserRoute;
