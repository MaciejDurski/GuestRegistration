import { db } from '@/firebase/config';
import { UserRegistrationFormProps } from '@/redux/users/interfaces';
import { push, ref, set } from 'firebase/database';

export const addUser = async (user: UserRegistrationFormProps) => {
  try {
    const reference = ref(db, 'users/');
    const newReference = await push(reference);
    set(newReference, user);
    return user;
  } catch (error) {
    console.error(error);
    return false;
  }
};
