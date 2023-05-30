import firebaseApp from '@/firebase/config';
import { GuestRegistrationFormProps } from '@/redux/guest/interfaces';
import { getDatabase, ref, set } from 'firebase/database';

export function addGuest(guest: Partial<GuestRegistrationFormProps>) {
  const db = getDatabase(firebaseApp);
  const reference = ref(db, 'guests/');

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

  const arrivalFormated = arrival?.toLocaleString('en', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  console.log(arrivalFormated);

  console.log(guest);

  set(reference, {
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
  });
}
