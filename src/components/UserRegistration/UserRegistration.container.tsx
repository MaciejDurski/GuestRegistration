import { addUser } from '@/firebase/database/user/addUser';
import { ResetUserForm } from '@/redux/users/interfaces';
import { UserRegistrationFormProps } from '@/redux/users/interfaces';
import { t } from 'i18next';
import { useState } from 'react';
import UserRegistration from './UserRegistration.component';

const UserRegistrationContainer = () => {
  const [formSubmitMessage, setFormSubmitMessage] = useState('');
  const [formSubmitStatus, setFormSubmitStatus] = useState(false);

  const onSubmit = async (
    values: UserRegistrationFormProps,
    resetForm: ResetUserForm
  ) => {
    const result = await addUser(values);
    if (!result) {
      setFormSubmitMessage(() => t('formValidation.formSubmitMessageError'));
      setFormSubmitStatus(true);
    } else {
      setFormSubmitMessage(() => t('formValidation.formSubmitMessageSuccess'));
      setFormSubmitStatus(false);
      resetForm();
    }
  };

  return (
    <>
      <UserRegistration
        onSubmit={onSubmit}
        formSubmitMessage={formSubmitMessage}
        formSubmitStatus={formSubmitStatus}
      />
    </>
  );
};

export default UserRegistrationContainer;
