import React from 'react';
import { RouteCpComponent, RouteData } from '@sotaoi/client/components';
interface AuthUserRouteProps {
    repository: string;
}
declare class AuthUserRoute extends RouteCpComponent<AuthUserRouteProps> {
    display({ params }: RouteData<AuthUserRouteProps>): null | React.ReactElement;
}
export { AuthUserRoute };
