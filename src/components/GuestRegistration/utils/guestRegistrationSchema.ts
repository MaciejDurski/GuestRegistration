import { t } from 'i18next';
import * as Yup from 'yup';

export const guestRegistrationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, `${t('guestFormValidation.firstNameTooShort')}`)
    .max(50, `${t('guestFormValidation.firstNameTooLong')}`)
    .required(`${t('guestFormValidation.firstNameRequired')}`),
  lastName: Yup.string()
    .min(2, `${t('guestFormValidation.lastNameTooShort')}`)
    .max(50, `${t('guestFormValidation.lastNameTooLong')}`)
    .required(`${t('guestFormValidation.lastNameRequired')}`),
  email: Yup.string()
    .email(`${t('guestFormValidation.emailInvalid')}`)
    .required(`${t('guestFormValidation.emailRequired')}`),
  tel: Yup.string().required(`${t('guestFormValidation.telRequired')}`),
  arrival: Yup.date()
    .typeError(`${t('guestFormValidation.dateTypeError')}`)
    .required(`${t('guestFormValidation.arrivalRequired')}`),
  departure: Yup.date()
    .required(`${t('guestFormValidation.departureRequired')}`)
    .min(Yup.ref('arrival'), `${t('guestFormValidation.departureMin')}`),
  accomodationComment: Yup.string().max(
    500,
    `${t('guestFormValidation.commentTooLong')}`
  ),
  specialNeeds: Yup.string().max(
    500,
    `${t('guestFormValidation.commentTooLong')}`
  ),
});