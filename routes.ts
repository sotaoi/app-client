import { store } from '@sotaoi/client/store';
//
import { routes as clientRoutes, RouterPropsFn, redirect } from '@sotaoi/client/router';
import { ErrorComponent } from '@app/client/components/generic/error-component';
import { HomeRoute } from '@app/client/components/home-route';
// gate
import { RegisterUserRoute } from '@app/client/components/gate-layout/routes/user/register-user-route';
import { AuthUserRoute } from '@app/client/components/gate-layout/routes/user/auth-user-route';
// main
import { UsersRoute } from '@app/client/components/main-layout/routes/user/users-route';
import { UserRoute } from '@app/client/components/main-layout/routes/user/user-route';
import { UpdateUserRoute } from '@app/client/components/main-layout/routes/user/update-user-route';
import { controlPanel } from '@sotaoi/client/control-panel';

// // custom redux store is working
// const reduxStore = createStore((state: { [key: string]: any } = {}, action: any) => {
//   switch (action.type) {
//     case 'action':
//       return { ...state, ...action.value };
//     default:
//       return state;
//   }
// });

const routes: RouterPropsFn = clientRoutes('sControlPanelGate:sControlPanelMain:s-control-panel', {
  controlPanel,
  config: {
    gateLayout: {
      prefix: '/gate',
      layout: 'app.layouts.gate',
      routes: {
        // '!/': HomeRoute,
        // moonlightmoonshine (app admin system, bundle admin system)
        '/register/{repository}(/{filters})?': RegisterUserRoute,
        '/auth/{repository}': AuthUserRoute,
      },
      condition: (): boolean => {
        if (store().getAuthRecord()) {
          redirect('/');
          return false;
        }
        return true;
      },
    },
    mainLayout: {
      prefix: '/',
      layout: 'app.layouts.main',
      routes: {
        '!/': HomeRoute,
        '/user/view/{uuid}': UserRoute,

        '/user/list/all': UsersRoute,
        '/user/edit/{uuid}': UpdateUserRoute,
      },
      // todo here: facade auth route if not logged in
      // facade: {
      //   route: '/gate/auth/user',
      //   condition: (): boolean => {
      //     return !store().getAuthRecord();
      //   },
      // },
      condition: (): boolean => {
        if (!store().getAuthRecord()) {
          redirect('/gate/auth/user');
          return false;
        }
        return true;
      },
    },
  },
  extendedComponents: [],
  layoutComponents: {},
  errorComponent: ErrorComponent,
  webComponent: () => null,
  mobileComponent: () => null,
  electronComponent: () => null,
  routerFlux: null,
  reactRedux: null,
  // reduxStore,
});

export { routes };
