import { createUser } from '@/firebase/cloudFunctions';
import { db } from '@/firebase/config';
import { ICreateUserResponse, UserFormProps } from '@/redux/users/interfaces';
import { ref, set } from 'firebase/database';

export const createUserFirebase = async (user: UserFormProps) => {
  try {
    const result = await createUser(user);

    const cloudFunctionResponse = result as ICreateUserResponse;

    if (cloudFunctionResponse.data.errorInfo) {
      return cloudFunctionResponse;
    }

    const userId = cloudFunctionResponse.data.uid;

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
