import React from 'react';
import { BaseField } from '@sotaoi/client/forms';
import { UpdateForm } from '@sotaoi/client/forms/form-classes/update-form';
import { FileField } from '@sotaoi/client/forms/fields/file-field';
import { removeUserCommand } from '@app/client/commands/user-commands';

interface FieldState {
  [key: string]: BaseField<any>;
  avatar: FileField;
}
const UpdateUserForm = (props: { form: UpdateForm }): null | React.ReactElement => {
  const Form = props.form;
  const fields = Form.getFields<FieldState>();

  return (
    <section style={{ margin: 20 }}>
      <Form.FormComponent>
        <button disabled={!Form.getFormState().canSubmit} type={'submit'}>
          Update User
        </button>
        <br />
        <br />
        <button onClick={(): void => Form.reset()} type={'button'}>
          Reset
        </button>
        <br />
        <br />

        {fields.email.wasTouched() &&
          fields.email.getErrors().map((error, index) => (
            <div key={index} style={{ color: '#ff3333', marginBottom: 10 }}>
              {error}
            </div>
          ))}
        <fields.email.component
          className={
            'px-3 py-3 placeholder-gray-400 text-gray-700 relativ bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline'
          }
          placeholder={'email'}
        />
        <br />
        <br />

        {fields.name.wasTouched() &&
          fields.name.getErrors().map((error, index) => (
            <div key={index} style={{ color: '#ff3333', marginBottom: 10 }}>
              {error}
            </div>
          ))}
        <fields.name.component
          className={
            'px-3 py-3 placeholder-gray-400 text-gray-700 relativ bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline'
          }
          placeholder={'name'}
        />
        <br />
        <br />

        {fields.avatar.wasTouched() &&
          fields.avatar.getErrors().map((error: any, index: any) => (
            <div key={index} style={{ color: '#ff3333', marginBottom: 10 }}>
              {error}
            </div>
          ))}
        <fields.avatar.component
          className={'w-full p-2 mb-6 text-black border-b-2 border-green-500 outline-none focus:bg-gray-300'}
        />
        {!fields.avatar.isEmpty() && (
          <button onClick={(): void => fields.avatar.clear()} type={'button'}>
            Clear avatar
          </button>
        )}
        {fields.avatar.getPreview() && (
          <div>
            <img src={fields.avatar.getPreview()} style={{ maxWidth: 200, maxHeight: 200 }} />
          </div>
        )}
        <br />

        <hr />

        <button
          className={
            'bg-transparent text-red-600 font-semibold hover:text-white py-1 px-3 mx-0 my-2 border border-red-400 hover:border-transparent rounded'
          }
          onClick={async (): Promise<void> => {
            const conclusion = await removeUserCommand(props.form.uuid, null);
            conclusion.notify('/user/list/all');
          }}
          type={'button'}
        >
          Remove User
        </button>

        <hr />

        <button disabled={!Form.getFormState().canSubmit} type={'submit'}>
          Update User
        </button>
      </Form.FormComponent>
    </section>
  );
};

export { UpdateUserForm };
