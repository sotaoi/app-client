import React from 'react';
import { RouteComponent, RouteData } from '@sotaoi/client/components';
interface NoProps {
}
declare class UsersRoute extends RouteComponent<NoProps> {
    display(props: RouteData<NoProps>): null | React.ReactElement;
    web(props: RouteData<NoProps>): null | React.ReactElement;
    mobile(props: RouteData<NoProps>): null | React.ReactElement;
    electron(props: RouteData<NoProps>): null | React.ReactElement;
}
export { UsersRoute };
