import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Field } from 'formik';
import { t } from 'i18next';
import {
  arrivalDate,
  departureDate,
} from '../GuestRegistration/utils/arrivalAndDepartureDates';
import { InputError } from './InputError';

interface IProps {
  label: string;
  name: string;
  setFieldValue: (
    field: string,
    value: { $d: Date },
    shouldValidate?: boolean | undefined
  ) => void;
  error: string | undefined;
  touched: boolean | undefined;
  disablePast?: boolean;
  departure: boolean;
  arrival: { $d: Date } | undefined;
}

const GMDatePicker = ({
  label,
  name,
  setFieldValue,
  error,
  touched,
  disablePast = false,
  departure,
  arrival,
}: IProps) => {
  return (
    <>
      <Field
        component={DatePicker}
        label={t(`guestForm.${label}`)}
        name={name}
        onChange={(value: { $d: Date }) => {
          setFieldValue(name, value);
        }}
        defaultValue={!departure ? arrivalDate : departureDate}
        minDate={!departure ? arrivalDate : arrival}
        maxDate={departureDate}
        views={['day']}
        disablePast={disablePast}
        slotProps={{
          textField: {
            error: !!error && !!touched,
          },
        }}
      />
      <Box pt={1}>{error && touched && <InputError error={error} />}</Box>
    </>
  );
};

export default GMDatePicker;
