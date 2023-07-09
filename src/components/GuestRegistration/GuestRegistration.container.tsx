import { addGuest } from '@/firebase/database/guest/addGuest';
import {
  GuestRegistrationFormProps,
  ResetForm,
} from '@/redux/guests/interfaces';
import GuestRegistration from './GuestRegistration.component';
import { useState } from 'react';
import { t } from 'i18next';

const GuestRegistrationContainer = () => {
  const [formSubmitMessage, setFormSubmitMessage] = useState('');
  const [formSubmitStatus, setFormSubmitStatus] = useState(false);

  const onSubmit = async (
    values: GuestRegistrationFormProps,
    resetForm: ResetForm
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
