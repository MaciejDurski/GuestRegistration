/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { formatDate } from '@/components/GuestRegistration/utils/arrivalAndDepartureDates';
import firebaseApp from '@/firebase/config';
import {
  GuestRegistrationFormProps,
  SpeechLength,
} from '@/redux/guest/interfaces';
import { getDatabase, push, ref, set } from 'firebase/database';

export function addGuest(guest: GuestRegistrationFormProps) {
  const db = getDatabase(firebaseApp);
  const reference = ref(db, 'guests/');
  const newReference = push(reference);

  if (!guest.presents) guest.speechLength = SpeechLength.none;

  const {
    firstName,
    lastName,
    email,
    tel,
    arrival,
    departure,
    accomodationComment,
    presents,
    ownsPc,
    speechLength,
    specialNeeds,
  } = guest;

  // Formik needs dates to be undefined as starting state for errors to work smoothly.
  // When running this function we are sure that these values are not undefined thanks to  form validation.
  const arrivalFormatted = formatDate(arrival!.$d);
  const departureFormatted = formatDate(departure!.$d);

  console.log(guest);

  set(newReference, {
    firstName,
    lastName,
    email,
    tel,
    arrival: arrivalFormatted,
    departure: departureFormatted,
    accomodationComment,
    presents,
    ownsPc,
    speechLength,
    specialNeeds,
  });
}
