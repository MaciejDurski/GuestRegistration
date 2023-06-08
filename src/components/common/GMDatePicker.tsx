import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Field, FieldProps } from 'formik';
import { t } from 'i18next';
import { InputError } from './InputError';
import dayjs from 'dayjs';

interface IProps {
  label: string;
  name: string;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) => void;
  error: string | undefined;
  touched: boolean | undefined;
  disablePast?: boolean;
  value?: string;
  defaultValue?: string;
  minDate?: string;
  maxDate?: string;
}

const GMDatePicker = ({
  label,
  name,
  setFieldValue,
  error,
  touched,
  disablePast = false,
  defaultValue,
  value,
  minDate,
  maxDate,
}: IProps) => {
  return (
    <>
      <Field
        component={DatePicker}
        label={t(`guestForm.${label}`)}
        name={name}
        onChange={(value: dayjs.Dayjs) =>
          setFieldValue(name, value.toISOString())
        }
        value={dayjs.utc(value)}
        minDate={dayjs.utc(minDate)}
        maxDate={dayjs.utc(maxDate)}
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
