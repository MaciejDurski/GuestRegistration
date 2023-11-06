import { createUserFirebase } from '@/firebase/database/user/createUser';
import { FormType } from '@/redux/enums/formType';
import { Status } from '@/redux/enums/status';
import {
  ICreateUserCloudFunctionResponse,
  ResetUserForm,
  UserFormProps,
} from '@/redux/users/interfaces';
import { DefaultTFuncReturn, t } from 'i18next';
import { useState } from 'react';
import UserForm from './UserForm.component';

const UserRegistrationContainer = () => {
  const [formSubmitStatus, setFormSubmitStatus] = useState<Status>(Status.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | DefaultTFuncReturn>(
    ''
  );

  const createUser = async (
    values: UserFormProps,
    resetForm: ResetUserForm
  ) => {
    const response = (await createUserFirebase(
      values
    )) as ICreateUserCloudFunctionResponse;
    if (response.data.errorInfo) {
      setFormSubmitStatus(Status.FAILED);
      setErrorMessage(response.data.errorInfo.message);
    } else if (!response) {
      setFormSubmitStatus(Status.FAILED);
      setErrorMessage(t('formValidation.formSubmitMessageError'));
    } else {
      setFormSubmitStatus(Status.SUCCEEDED);
      resetForm();
    }
  };

  return (
    <UserForm
      formType={FormType.CREATE}
      createUser={createUser}
      formSubmitStatus={formSubmitStatus}
      errorMessage={errorMessage}
    />
  );
};

export default UserRegistrationContainer;
