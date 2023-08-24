import { FormType } from '@/redux/enums/formType';
import { Status } from '@/redux/enums/status';
import { IUser, ResetUserForm, UserFormProps } from '@/redux/users/interfaces';
import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel } from 'formik-mui';
import { t } from 'i18next';
import FormStatusMessage from '../../common/FormStatusMessage';
import GMInput from '../../common/GMInput';
import { userRegistrationSchema } from './userForm.schema';

interface IProps {
  formType: FormType;
  formSubmitStatus: Status;
  createUser?: (values: UserFormProps, resetForm: ResetUserForm) => void;
  editUser?: (values: UserFormProps, userId?: string) => void;
  deleteUser?: (userId: string) => void;
  currentRow?: IUser | null;
}

const UserForm = ({
  formType,
  formSubmitStatus,
  createUser,
  editUser,
  deleteUser,
  currentRow,
}: IProps) => {
  const isCreateForm = formType === FormType.CREATE;
  const isEditForm = formType === FormType.EDIT;

  return (
    <Formik
      initialValues={{
        firstName: currentRow?.firstName || '',
        lastName: currentRow?.lastName || '',
        email: currentRow?.email || '',
        password: currentRow?.password || '',
        tel: currentRow?.tel || '',
        isAdmin: currentRow?.isAdmin || false,
      }}
      validationSchema={userRegistrationSchema}
      onSubmit={(values, { resetForm }) => {
        if (isCreateForm) {
          createUser && createUser(values, resetForm);
        } else if (isEditForm) {
          editUser && editUser(values, currentRow?.id);
        }
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <Stack
            mx="auto"
            px={isCreateForm ? 2 : 0}
            pb={isCreateForm ? 2 : 0}
            mb={isCreateForm ? 2 : 0}
            width={{
              xs: '100%',
              sm: isCreateForm ? '50%' : '100%',
            }}
          >
            {isEditForm && (
              <Typography variant="h5" component="h1">
                {t('userForm.editUser')}
              </Typography>
            )}
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
              name="password"
              type="password"
              label={t('common.password')}
              component={GMInput}
              error={errors.password}
              touched={touched.password}
            />
            <Field
              name="tel"
              type="tel"
              label={t('common.tel')}
              component={GMInput}
              error={errors.tel}
              touched={touched.tel}
            />
            <Stack display="flex">
              <Field
                component={CheckboxWithLabel}
                type="checkbox"
                name="isAdmin"
                Label={{ label: t('userForm.isAdmin') }}
              />
              <Box ml="auto" mb={5}>
                {isEditForm && (
                  <Button
                    onClick={() =>
                      currentRow && deleteUser && deleteUser(currentRow.id)
                    }
                    sx={{ mr: 1 }}
                    color="error"
                    variant="contained"
                    type="button"
                    size="large"
                  >
                    {t('common.delete')}
                  </Button>
                )}
                <Button variant="contained" type="submit" size="large">
                  {isCreateForm && t('userForm.addUser')}
                  {isEditForm && t('common.save')}
                </Button>
              </Box>
            </Stack>
            {isCreateForm && (
              <FormStatusMessage
                formSubmitStatus={formSubmitStatus}
                message={t('formValidation.formSubmitMessageSuccess')}
              />
            )}
            {isEditForm && (
              <FormStatusMessage
                formSubmitStatus={formSubmitStatus}
                message={t('formValidation.formEditMessageSuccess')}
              />
            )}
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
