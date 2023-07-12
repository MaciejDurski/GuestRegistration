import { addGuest } from '@/firebase/database/guest/addGuest';
import {
  GuestRegistrationFormProps,
  ResetGuestForm,
} from '@/redux/guests/interfaces';
import { t } from 'i18next';
import { useState } from 'react';
import GuestRegistration from './GuestRegistration.component';

const GuestRegistrationContainer = () => {
  const [formSubmitMessage, setFormSubmitMessage] = useState('');
  const [formSubmitStatus, setFormSubmitStatus] = useState(false);

  const onSubmit = async (
    values: GuestRegistrationFormProps,
    resetForm: ResetGuestForm
  ) => {
    const result = await addGuest(values);
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
      <GuestRegistration
        onSubmit={onSubmit}
        formSubmitMessage={formSubmitMessage}
        formSubmitStatus={formSubmitStatus}
      />
    </>
  );
};

export default GuestRegistrationContainer;
