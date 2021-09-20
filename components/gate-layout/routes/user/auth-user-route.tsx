import React from 'react';
import { RouteCpComponent, RouteData } from '@sotaoi/client/components';
import { Errors } from '@app/client/errors';
import { AuthUserView, AuthUserViewProps } from '@app/client/components/gate-layout/views/user/auth-user-view';

interface AuthUserRouteProps {
  repository: string;
}
class AuthUserRoute extends RouteCpComponent<AuthUserRouteProps> {
  public display({ params }: RouteData<AuthUserRouteProps>): null | React.ReactElement {
    if (['user'].indexOf(params.repository) === -1) {
      throw new Errors.InvalidGateRepository();
    }
    return this.extendedView<AuthUserViewProps>(AuthUserView, {});
  }
}

export { AuthUserRoute };
