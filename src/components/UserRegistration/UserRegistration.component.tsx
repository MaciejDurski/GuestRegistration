import {
  ResetUserForm,
  UserRegistrationFormProps,
} from '@/redux/users/interfaces';
import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel } from 'formik-mui';
import { t } from 'i18next';
import GMInput from '../common/GMInput';
import { userRegistrationSchema } from './UserRegistration.schema';

interface IProps {
  onSubmit: (
    values: UserRegistrationFormProps,
    resetForm: ResetUserForm
  ) => void;
  formSubmitMessage: string;
  formSubmitStatus: boolean;
}

const UserRegistration = ({
  onSubmit,
  formSubmitMessage,
  formSubmitStatus,
}: IProps) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        isAdmin: false,
      }}
      validationSchema={userRegistrationSchema}
      onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
    >
      {({ touched, errors }) => (
        <Form>
          <Stack
            mt={{ xs: 2, sm: 4 }}
            mx="auto"
            width={{ xs: '100%', sm: '60%' }}
          >
            <Typography variant="h5" component="h1">
              {t('userForm.userForm')}
            </Typography>
            <Field
              name="firstName"
              label={t('common.firstName')}
              component={GMInput}
              error={errors.firstName}
              touched={touched.firstName}
            />

            <Field
              name="lastName"
              label={t('common.lastName')}
              component={GMInput}
              error={errors.lastName}
              touched={touched.lastName}
            />

            <Field
              name="email"
              type="email"
              label={t('common.email')}
              component={GMInput}
              error={errors.email}
              touched={touched.email}
            />

            <Field
              name="tel"
              type="tel"
              label={t('common.tel')}
              component={GMInput}
              error={errors.tel}
              touched={touched.tel}
            />

            <Box pb={2}>
              <Field
                component={CheckboxWithLabel}
                type="checkbox"
                name="isAdmin"
                Label={{ label: t('userForm.isAdmin') }}
              />
            </Box>

            <Box ml="auto" mt={2} mb={5}>
              <Button variant="contained" type="submit" size="large">
                {t('guestForm.submit')}
              </Button>
            </Box>
            {formSubmitMessage && (
              <Typography
                variant="h5"
                mx="auto"
                color={formSubmitStatus ? 'error.main' : 'success.main'}
              >
                {formSubmitMessage}
              </Typography>
            )}
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default UserRegistration;
