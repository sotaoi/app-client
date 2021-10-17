import React from 'react';
import { ViewComponent, ViewData, ViewPromises } from '@sotaoi/client/components';
interface NoProps {
}
declare class UsersView extends ViewComponent<NoProps> {
    promises(): ViewPromises<NoProps>;
    web({ results, props }: ViewData<NoProps>): null | React.ReactElement;
    mobile(): null;
    electron(): null;
}
export { UsersView };
