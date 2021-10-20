import React from 'react';
import { ViewComponent, ViewData, ViewPromises } from '@sotaoi/client/components';
interface UserViewProps {
    uuid?: string;
}
declare class UserView extends ViewComponent<UserViewProps> {
    promises(props: UserViewProps): ViewPromises<UserViewProps>;
    web({ results, props }: ViewData<UserViewProps>): null | React.ReactElement;
    mobile(): null;
    electron(): null;
}
export { UserView };
