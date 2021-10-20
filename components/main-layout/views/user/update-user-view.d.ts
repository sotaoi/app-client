import React from 'react';
import { ViewComponent, ViewPromises, ViewData } from '@sotaoi/client/components';
import { UpdateForm } from '@sotaoi/client/forms/form-classes/update-form';
interface UpdateUserFormProps {
    uuid: string;
}
declare class UpdateUserView extends ViewComponent<UpdateUserFormProps> {
    promises(): ViewPromises<UpdateUserFormProps>;
    init({ results, props }: ViewData<UpdateUserFormProps>): {
        form: UpdateForm;
    };
    web(data: ViewData<UpdateUserFormProps>): null | React.ReactElement;
    mobile(): null;
    electron(): null;
}
export { UpdateUserView };
