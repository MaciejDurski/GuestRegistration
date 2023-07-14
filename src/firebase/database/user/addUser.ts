import { auth, db } from '@/firebase/config';
import { UserRegistrationFormProps } from '@/redux/users/interfaces';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

export const addUser = async (user: UserRegistrationFormProps) => {
  try {
    const authData = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    const userId = authData.user.uid;

    const reference = ref(db, `users/${userId}`);

    const userWithId = {
      id: userId,
      ...user,
    };

    set(reference, userWithId);

    return user;
  } catch (error) {
    console.error(error);
    return false;
  }
};
