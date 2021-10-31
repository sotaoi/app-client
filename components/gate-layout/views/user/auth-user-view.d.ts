import { ViewComponent, ViewData, ViewPromises } from '@sotaoi/client/components';
import { AuthForm } from '@sotaoi/client/forms/form-classes/auth-form';
interface AuthUserViewProps {
}
declare abstract class AuthUserView extends ViewComponent<AuthUserViewProps> {
    promises(): ViewPromises<AuthUserViewProps>;
    init({ results, props }: ViewData<AuthUserViewProps>): {
        form: AuthForm;
    };
}
export { AuthUserView };
export type { AuthUserViewProps };
