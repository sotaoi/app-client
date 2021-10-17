import React from 'react';
import { RouteCpComponent, RouteData } from '@sotaoi/client/components';
import { Errors } from '@app/client/errors';
import { RegisterUserView } from '@app/client/components/gate-layout/views/user/register-user-view';

interface Props {
  repository: string;
  filters: { [key: string]: any };
}
class RegisterUserRoute extends RouteCpComponent<Props> {
  public display({ params }: RouteData<Props>): null | React.ReactElement {
    if (['user'].indexOf(params.repository) === -1) {
      throw new Errors.InvalidGateRepository();
    }
    return this.extendedView(RegisterUserView, { filters: params.filters || null });
  }
}

export { RegisterUserRoute };
