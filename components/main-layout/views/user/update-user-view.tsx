import React from 'react';
import { ViewComponent, ViewPromises, ViewData } from '@sotaoi/client/components';
import { FormConstructor, UpdateFormFactory } from '@sotaoi/client/forms';
import { Artifacts } from '@sotaoi/omni/artifacts';
import { pushRoute } from '@sotaoi/client/router';
import { getUser } from '@app/client/queries/user-queries';
import { UpdateUserForm } from '@app/client/components/main-layout/forms/user/update-user-form';
import { InputField } from '@sotaoi/client/forms/fields/input-field';
import { FileField } from '@sotaoi/client/forms/fields/file-field';
import { getUserUpdateFormValidations } from '@app/client/queries/validation-queries';
import { UpdateForm } from '@sotaoi/client/forms/form-classes/update-form';

// todo mediumprio: (and in any component in general) handle component error
interface UpdateUserFormProps {
  uuid: string;
}
class UpdateUserView extends ViewComponent<UpdateUserFormProps> {
  public promises(): ViewPromises<UpdateUserFormProps> {
    return {
      user: getUser(),
      validations: getUserUpdateFormValidations(),
    };
  }

  public init({ results, props }: ViewData<UpdateUserFormProps>): { form: UpdateForm } {
    const user = results.user.record;
    const registerUserFormConstructor = FormConstructor(
      {
        email: InputField.input(user.email),
        // add user password change
        avatar: FileField.input(user.avatar),
      },
      results.validations,
    );

    const Form = UpdateFormFactory(null, new Artifacts(), null, 'user', registerUserFormConstructor, props.uuid);
    Form.init();

    React.useEffect(() => (): void => Form.destroy(), []);

    Form.onCommandSuccess(async (result) => {
      if (!result.artifact) {
        throw new Error('something went wrong');
      }
      pushRoute(`/user/view/${result.artifact.uuid}`);
    });

    return {
      form: Form,
      // countries,
    };
  }

  public web(data: ViewData<UpdateUserFormProps>): null | React.ReactElement {
    const { form } = this.init(data);
    return <UpdateUserForm form={form} />;
  }

  public mobile(): null {
    return null;
  }

  public electron(): null {
    return null;
  }
}

export { UpdateUserView };
