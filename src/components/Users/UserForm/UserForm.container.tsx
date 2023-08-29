import { createUserFirebase } from '@/firebase/database/user/createUser';
import { FormType } from '@/redux/enums/formType';
import { Status } from '@/redux/enums/status';
import { ResetUserForm, UserFormProps } from '@/redux/users/interfaces';
import { useState } from 'react';
import UserRegistration from './UserForm.component';

const UserRegistrationContainer = () => {
  const [formSubmitStatus, setFormSubmitStatus] = useState<Status>(Status.IDLE);

  const createUser = async (
    values: UserFormProps,
    resetForm: ResetUserForm
  ) => {
    const result = await createUserFirebase(values);
    if (result === 'The user with the provided phone number already exists.') {
      setFormSubmitStatus(Status.USED_TEL);
    } else if (
      result === 'The email address is already in use by another account.'
    ) {
      setFormSubmitStatus(Status.USED_EMAIL);
    } else if (!result) {
      setFormSubmitStatus(Status.FAILED);
    } else {
      setFormSubmitStatus(Status.SUCCEEDED);
      resetForm();
    }
  };

  return (
    <UserRegistration
      formType={FormType.CREATE}
      createUser={createUser}
      formSubmitStatus={formSubmitStatus}
    />
  );
};

export default UserRegistrationContainer;
