import { t } from 'i18next';
import * as Yup from 'yup';

export const userLoginSchema = Yup.object({
  email: Yup.string()
    .email(`${t('guestFormValidation.emailInvalid')}`)
    .required(`${t('guestFormValidation.emailRequired')}`),
  password: Yup.string().required(
    `${t('userFormValidation.passwordRequired')}`
  ),
});
