import { addUserFB } from '@/firebase/database/user/addUser';
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
    const result = await addUserFB(values);
    if (!result) {
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
