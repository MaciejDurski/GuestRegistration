import { createUser } from '@/firebase/cloudFunctions';
import { db } from '@/firebase/config';
import { UserFormProps } from '@/redux/users/interfaces';
import { ref, set } from 'firebase/database';

export const createUserFirebase = async (user: UserFormProps) => {
  try {
    const result = await createUser(user);

    const unknownData = result.data as {
      uid?: string;
      errorInfo?: { message: string };
    };

    if (unknownData.errorInfo) {
      const errorMessage = unknownData.errorInfo.message;
      return errorMessage;
    }

    let userId;
    if (unknownData.uid) {
      userId = unknownData.uid;
    }

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
