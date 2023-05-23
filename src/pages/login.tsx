import { userLoginSchema } from '@/components/GuestRegistration/utils/validationSchemas/loginUserSchema';
import GMInput from '@/components/common/GMInput';
import { loginUser } from '@/firebase/auth/loginUser';
import { auth } from '@/firebase/config';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import { t } from 'i18next';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';

export interface ILogin {
  userEmail: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  const handleLogin = (values: ILogin) => {
    loginUser(values);
    router.push('/admin');
  };

  if (!user) {
    return (
      <>
        <Formik
          initialValues={{
            userEmail: '',
            password: '',
          }}
          validationSchema={userLoginSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ touched, errors }) => (
            <Form>
              <Stack p={4} minWidth="320px" spacing={2} alignItems="center">
                <Field
                  name="userEmail"
                  label={t('common.email')}
                  component={GMInput}
                  error={errors.userEmail}
                  touched={touched.userEmail}
                />

                <Field
                  name="password"
                  label={t('common.password')}
                  component={GMInput}
                  error={errors.password}
                  touched={touched.password}
                />

                <Button
                  sx={{ maxWidth: '50%' }}
                  variant="outlined"
                  type="submit"
                >
                  {t('common.login')}
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </>
    );
  } else {
    router.push('/');
  }
};

export default Login;
