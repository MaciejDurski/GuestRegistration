import { userLoginSchema } from '@/components/GuestRegistration/utils/validationSchemas/loginUserSchema';
import GMInput from '@/components/common/GMInput';
import { loginUser } from '@/firebase/auth/login';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import { t } from 'i18next';

export interface ILogin {
  userEmail: string;
  password: string;
}

const login = () => {
  return (
    <>
      <Formik
        initialValues={{
          userEmail: '',
          password: '',
        }}
        validationSchema={userLoginSchema}
        onSubmit={(values) => loginUser(values)}
      >
        {({ values, touched, errors }) => (
          <Form>
            <Stack p={4} minWidth="320px" spacing={2} alignItems="center">
              <div>test@test.com</div>
              <Field
                name="userEmail"
                label={t('common.email')}
                component={GMInput}
                error={errors.userEmail}
                touched={touched.userEmail}
              />
              <div>test123</div>
              <Field
                name="password"
                label={t('common.password')}
                component={GMInput}
                error={errors.password}
                touched={touched.password}
              />

              <Button sx={{ maxWidth: '50%' }} variant="outlined" type="submit">
                {t('loginUser.login')}
              </Button>
              <div>{JSON.stringify(values)}</div>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default login;
