/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { formatDate } from '@/components/GuestRegistration/utils/arrivalAndDepartureDates';
import firebaseApp from '@/firebase/config';
import { GuestRegistrationFormProps } from '@/redux/guest/interfaces';
import { getDatabase, push, ref, set } from 'firebase/database';

export function addGuest(guest: GuestRegistrationFormProps) {
  const db = getDatabase(firebaseApp);
  const reference = ref(db, 'guests/');
  const newReference = push(reference);

  const { arrival, departure } = guest;

  // Formik needs dates to be undefined as starting state for errors to work smoothly.
  // When running this function we are sure that these values are not undefined thanks to  form validation.
  const arrivalFormatted = formatDate(arrival!.$d);
  const departureFormatted = formatDate(departure!.$d);

  set(newReference, {
    ...guest,
    arrival: arrivalFormatted,
    departure: departureFormatted,
  });
}
