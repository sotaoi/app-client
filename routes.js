"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const store_1 = require("@sotaoi/client/store");
//
const router_1 = require("@sotaoi/client/router");
const error_component_1 = require("@app/client/components/generic/error-component");
const home_route_1 = require("@app/client/components/home-route");
// gate
const register_user_route_1 = require("@app/client/components/gate-layout/routes/user/register-user-route");
const auth_user_route_1 = require("@app/client/components/gate-layout/routes/user/auth-user-route");
// main
const users_route_1 = require("@app/client/components/main-layout/routes/user/users-route");
const user_route_1 = require("@app/client/components/main-layout/routes/user/user-route");
const update_user_route_1 = require("@app/client/components/main-layout/routes/user/update-user-route");
const control_panel_1 = require("@sotaoi/client/control-panel");
// // custom redux store is working
// const reduxStore = createStore((state: { [key: string]: any } = {}, action: any) => {
//   switch (action.type) {
//     case 'action':
//       return { ...state, ...action.value };
//     default:
//       return state;
//   }
// });
const routes = router_1.routes('sControlPanelGate:sControlPanelMain:s-control-panel', {
    controlPanel: control_panel_1.controlPanel,
    config: {
        gateLayout: {
            prefix: '/gate',
            layout: 'app.layouts.gate',
            routes: {
                // '!/': HomeRoute,
                // moonlightmoonshine (app admin system, bundle admin system)
                '/register/{repository}(/{filters})?': register_user_route_1.RegisterUserRoute,
                '/auth/{repository}': auth_user_route_1.AuthUserRoute,
            },
            condition: () => {
                if (store_1.store().getAuthRecord()) {
                    router_1.redirect('/');
                    return false;
                }
                return true;
            },
        },
        mainLayout: {
            prefix: '/',
            layout: 'app.layouts.main',
            routes: {
                '!/': home_route_1.HomeRoute,
                '/user/view/{uuid}': user_route_1.UserRoute,
                '/user/list/all': users_route_1.UsersRoute,
                '/user/edit/{uuid}': update_user_route_1.UpdateUserRoute,
            },
            // todo lowprio: facade auth route if not logged in
            // facade: {
            //   route: '/gate/auth/user',
            //   condition: (): boolean => {
            //     return !store().getAuthRecord();
            //   },
            // },
            condition: () => {
                if (!store_1.store().getAuthRecord()) {
                    router_1.redirect('/gate/auth/user');
                    return false;
                }
                return true;
            },
        },
    },
    extendedComponents: [],
    layoutComponents: {},
    errorComponent: error_component_1.ErrorComponent,
    webComponent: () => null,
    mobileComponent: () => null,
    electronComponent: () => null,
    routerFlux: null,
    reactRedux: null,
});
exports.routes = routes;
