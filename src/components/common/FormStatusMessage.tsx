import { Status } from '@/redux/enums/status';
import { Typography } from '@mui/material';
import { t } from 'i18next';
import React from 'react';

interface IProps {
  formSubmitStatus: Status;
  message: string;
}

const FormStatusMessage = ({ formSubmitStatus, message }: IProps) => {
  return (
    <>
      {formSubmitStatus === Status.SUCCEEDED && (
        <Typography variant="h5" mx="auto" color="success.main">
          {message}
        </Typography>
      )}
      {formSubmitStatus === Status.FAILED && (
        <Typography variant="h5" mx="auto" color="error.main">
          {t('formValidation.formSubmitMessageError')}
        </Typography>
      )}
      {formSubmitStatus === Status.USED_TEL && (
        <Typography variant="h5" mx="auto" color="error.main">
          {t('formValidation.formMessageErrorUsedTel')}
        </Typography>
      )}
      {formSubmitStatus === Status.USED_EMAIL && (
        <Typography variant="h5" mx="auto" color="error.main">
          {t('formValidation.formMessageErrorUsedEmail')}
        </Typography>
      )}
    </>
  );
};

export default FormStatusMessage;
