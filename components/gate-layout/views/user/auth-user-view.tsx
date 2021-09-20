import React from 'react';
import { ViewComponent, ViewData, ViewPromises } from '@sotaoi/client/components';
import { AuthFormFactory, FormConstructor } from '@sotaoi/client/forms';
import { Artifacts } from '@sotaoi/omni/artifacts';
import { AuthForm } from '@sotaoi/client/forms/form-classes/auth-form';
import { InputField } from '@sotaoi/client/forms/fields/input-field';
import { getAuthUserFormValidations } from '@app/client/queries/validation-queries';
import { BooleanField } from '@sotaoi/client/forms/fields/boolean-field';

interface AuthUserViewProps {}
abstract class AuthUserView extends ViewComponent<AuthUserViewProps> {
  public promises(): ViewPromises<AuthUserViewProps> {
    return {
      validations: getAuthUserFormValidations(),
    };
  }

  public init({ results, props }: ViewData<AuthUserViewProps>): { form: AuthForm } {
    const authUserFormConstructor = FormConstructor(
      {
        email: InputField.input(''),
        password: InputField.input(''),
        rememberMe: BooleanField.input(true),
      },
      results.validations,
    );

    const Form = AuthFormFactory(new Artifacts(), 'user', authUserFormConstructor, 'test:password:email:username');
    Form.init();

    React.useEffect(() => {
      return (): void => {
        Form.unmount();
      };
    }, []);

    Form.onAuthSuccess(async (result) => {
      // do nothing (will be redirected by router rules)
    });

    return { form: Form };
  }
}

export { AuthUserView };
export type { AuthUserViewProps };
