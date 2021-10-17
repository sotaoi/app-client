import React from 'react';
import { RouteCpComponent, RouteData } from '@sotaoi/client/components';
declare abstract class HomeRoute extends RouteCpComponent<{}> {
    display({ params }: RouteData<{}>): null | React.ReactElement;
}
export { HomeRoute };
