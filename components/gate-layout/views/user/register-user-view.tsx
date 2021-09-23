import React from 'react';
import { ViewComponent, ViewData, ViewPromises } from '@sotaoi/client/components';
import { StoreFormFactory, FormConstructor } from '@sotaoi/client/forms';
import { Artifacts, AuthRecord } from '@sotaoi/omni/artifacts';
import { StoreForm } from '@sotaoi/client/forms/form-classes/store-form';
import { InputField } from '@sotaoi/client/forms/fields/input-field';
import { FileField } from '@sotaoi/client/forms/fields/file-field';
import { getUserStoreFormValidations } from '@app/client/queries/validation-queries';
import { store } from '@sotaoi/client/store';

interface RegisterUserFormProps {
  filters: { [key: string]: any };
}
abstract class RegisterUserView extends ViewComponent<RegisterUserFormProps> {
  public promises(): ViewPromises<RegisterUserFormProps> {
    return {
      validations: getUserStoreFormValidations(),
    };
  }

  public init({ results, props }: ViewData<RegisterUserFormProps>): { form: StoreForm } {
    const RegisterUserFormConstructor = FormConstructor(
      {
        email: InputField.input(''),
        password: InputField.input(''),
        name: InputField.input(null),
        avatar: FileField.input(null),
      },
      results.validations,
    );
    const Form = StoreFormFactory(null, new Artifacts(), null, 'user', RegisterUserFormConstructor);
    Form.init();

    Form.onCommandSuccess(async (result) => {
      if (!result.artifact) {
        throw new Error('something went wrong');
      }
      const artifact = result.artifact as AuthRecord;
      const authRecord = new AuthRecord(
        artifact.domainSignature,
        artifact.repository,
        artifact.uuid,
        artifact.createdAt,
        artifact.active,
        {},
      );
      await store().setAuthRecord(authRecord, artifact.pocket.accessToken);
    });

    React.useEffect(() => (): void => Form.destroy(), []);

    return { form: Form };
  }
}

export { RegisterUserView };
export type { RegisterUserFormProps };
