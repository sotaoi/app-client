import React from 'react';
import { RouteCpComponent, RouteData } from '@sotaoi/client/components';
interface Props {
    repository: string;
    filters: {
        [key: string]: any;
    };
}
declare class RegisterUserRoute extends RouteCpComponent<Props> {
    display({ params }: RouteData<Props>): null | React.ReactElement;
}
export { RegisterUserRoute };
