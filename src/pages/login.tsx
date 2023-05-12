import { userLoginSchema } from '@/components/GuestRegistration/utils/validationSchemas/loginUserSchema';
import GMInput from '@/components/common/GMInput';
import { Box, Button } from '@mui/material';
import { Stack } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import { t } from 'i18next';

const login = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
        }}
        validationSchema={userLoginSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ touched, errors }) => (
          <Form>
            <Stack p={4} width="40%" minWidth="320px">
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
              <Box mt={2}>
                <Button variant="outlined" type="submit">
                  {t('guestForm.submit')}
                </Button>
              </Box>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default login;
