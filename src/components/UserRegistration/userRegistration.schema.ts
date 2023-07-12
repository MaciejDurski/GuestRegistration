import { t } from 'i18next';
import * as Yup from 'yup';

export const userRegistrationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, `${t('formValidation.firstNameTooShort')}`)
    .max(50, `${t('formValidation.firstNameTooLong')}`)
    .required(`${t('formValidation.firstNameRequired')}`),
  lastName: Yup.string()
    .min(2, `${t('formValidation.lastNameTooShort')}`)
    .max(50, `${t('formValidation.lastNameTooLong')}`)
    .required(`${t('formValidation.lastNameRequired')}`),
  email: Yup.string()
    .email(`${t('formValidation.emailInvalid')}`)
    .required(`${t('formValidation.emailRequired')}`),
  tel: Yup.string().required(`${t('formValidation.telRequired')}`),
  isAdmin: Yup.boolean().required(`${t('userFormValidation.isAdminRequired')}`),
});
