import { db } from '@/firebase/config';
import { IGuest } from '@/redux/guests/interfaces';
import { ref, set } from 'firebase/database';

export const setGuest = async (guest: IGuest) => {
  try {
    const reference = ref(db, `guests/${guest.id}`);
    await set(reference, guest);
    return guest;
  } catch (error) {
    console.error(error);
    return false;
  }
};
