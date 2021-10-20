import React from 'react';
import { RouteComponent, RouteData } from '@sotaoi/client/components';
interface Props {
    uuid: string;
}
declare class UserRoute extends RouteComponent<Props> {
    display({ params }: RouteData<Props>): null | React.ReactElement;
    web(props: RouteData<Props>): null | React.ReactElement;
    mobile(props: RouteData<Props>): null | React.ReactElement;
    electron(props: RouteData<Props>): null | React.ReactElement;
}
export { UserRoute };
