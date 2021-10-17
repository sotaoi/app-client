import React from 'react';
import { RouteCpComponent, RouteData } from '@sotaoi/client/components';
import { HomeView } from '@app/client/components/home-view';

abstract class HomeRoute extends RouteCpComponent<{}> {
  public display({ params }: RouteData<{}>): null | React.ReactElement {
    return this.extendedView<{}>(HomeView, {});
  }
}

export { HomeRoute };
