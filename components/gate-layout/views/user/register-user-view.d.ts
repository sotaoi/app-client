import { ViewComponent, ViewData, ViewPromises } from '@sotaoi/client/components';
import { StoreForm } from '@sotaoi/client/forms/form-classes/store-form';
interface RegisterUserFormProps {
    filters: {
        [key: string]: any;
    };
}
declare abstract class RegisterUserView extends ViewComponent<RegisterUserFormProps> {
    promises(): ViewPromises<RegisterUserFormProps>;
    init({ results, props }: ViewData<RegisterUserFormProps>): {
        form: StoreForm;
    };
}
export { RegisterUserView };
export type { RegisterUserFormProps };
