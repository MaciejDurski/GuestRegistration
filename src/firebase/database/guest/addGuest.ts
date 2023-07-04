import { db } from '@/firebase/config';
import { GuestRegistrationFormProps } from '@/redux/guests/interfaces';
import { push, ref, set } from 'firebase/database';

export const addGuest = async (guest: GuestRegistrationFormProps) => {
  try {
    const reference = ref(db, 'guests/');
    const newReference = await push(reference);
    set(newReference, guest);
    return guest;
  } catch (error) {
    console.error(error);
    return false;
  }
};
