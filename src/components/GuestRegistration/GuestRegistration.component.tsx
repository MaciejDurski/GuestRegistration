import {
  GuestRegistrationFormProps,
  ResetGuestForm,
} from '@/redux/guests/interfaces';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel, Select } from 'formik-mui';
import { t } from 'i18next';
import 'react-phone-input-2/lib/style.css';
import GMDatePicker from '../common/GMDatePicker';
import GMInput from '../common/GMInput';
import { InputError } from '../common/InputError';
import { arrivalDate, departureDate } from './arrivalAndDepartureDates';
import { guestRegistrationSchema } from './guestRegistration.schema';
import { speechLengthOptions } from './speechLengthOptions';
import StyledPhoneInput from './StyledPhoneInput';

interface IProps {
  onSubmit: (
    values: GuestRegistrationFormProps,
    resetForm: ResetGuestForm
  ) => void;
  formSubmitMessage: string;
  formSubmitStatus: boolean;
}

const GuestRegistration = ({
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
        arrival: arrivalDate,
        departure: departureDate,
        accomodationComment: '',
        presents: false,
        ownsPc: false,
        speechLength: null,
        specialNeeds: '',
      }}
      validationSchema={guestRegistrationSchema}
      onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
    >
      {({ values, touched, setFieldValue, errors }) => (
        <Form>
          <Stack
            mt={{ xs: 2, sm: 4 }}
            mx="auto"
            width={{ xs: '100%', sm: '60%' }}
          >
            <Typography variant="h5" component="h1">
              {t('guestForm.guestForm')}
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

            <Box mt={1}>
              <StyledPhoneInput
                inputProps={{
                  name: 'tel',
                }}
                onChange={(tel: string) => {
                  setFieldValue('tel', tel);
                  console.log(tel);
                }}
                country={'pl'}
                containerClass={`react-phone-number ${
                  errors.tel ? 'error' : ''
                }`}
              />
              <Box mt={1}>
                {errors.tel && touched.tel && <InputError error={errors.tel} />}
              </Box>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} pt={2}>
              {/* DateRangePicker is included on Pro package, thus we're using DatePickers */}
              <Box>
                <GMDatePicker
                  label={t(`guestForm.arrivalDate`)}
                  name="arrival"
                  setFieldValue={setFieldValue}
                  error={errors.arrival}
                  touched={touched.arrival}
                  disablePast={true}
                  minDate={arrivalDate}
                  maxDate={departureDate}
                  value={values.arrival}
                />
              </Box>
              <Box pt={{ xs: 2, sm: 0 }} pl={{ sm: 3 }}>
                <GMDatePicker
                  label={t(`guestForm.departureDate`)}
                  name="departure"
                  setFieldValue={setFieldValue}
                  error={errors.departure}
                  touched={touched.departure}
                  minDate={arrivalDate}
                  maxDate={departureDate}
                  value={values.departure}
                />
              </Box>
            </Stack>

            <Field
              component={GMInput}
              name="accomodationComment"
              label={t('guestForm.accomodationComment')}
              type="textarea"
              multiline={true}
              error={errors.accomodationComment}
              touched={touched.accomodationComment}
            />

            <Field
              component={CheckboxWithLabel}
              type="checkbox"
              onClick={() => {
                values.ownsPc = false;
                values.speechLength = null;
                values.specialNeeds = '';
              }}
              name="presents"
              Label={{ label: t('guestForm.presents') }}
            />
            {values.presents && (
              <>
                <Box pb={2}>
                  <Field
                    component={CheckboxWithLabel}
                    type="checkbox"
                    name="ownsPc"
                    Label={{ label: t('guestForm.ownsPc') }}
                  />
                </Box>

                <Field
                  component={Select}
                  name="speechLength"
                  label={t('guest.speechLength')}
                  value={values.speechLength || ''}
                  formHelperText={{
                    children: t('guestForm.speechLengthHelperText'),
                  }}
                  MenuProps={{ disableScrollLock: true }}
                >
                  {Object.entries(speechLengthOptions).map(([key, name]) => (
                    <MenuItem key={key} value={key}>
                      {name}
                    </MenuItem>
                  ))}
                </Field>

                <Field
                  component={GMInput}
                  name="specialNeeds"
                  label={t('guestForm.specialNeeds')}
                  type="textarea"
                  multiline={true}
                  error={errors.specialNeeds}
                  touched={touched.specialNeeds}
                />
              </>
            )}
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
          {JSON.stringify(values.tel)}
        </Form>
      )}
    </Formik>
  );
};

export default GuestRegistration;
