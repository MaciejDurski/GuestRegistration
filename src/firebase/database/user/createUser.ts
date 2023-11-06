import { createUser } from '@/firebase/cloudFunctions';
import { db } from '@/firebase/config';
import {
  ICreateUserCloudFunctionResponse,
  UserFormProps,
} from '@/redux/users/interfaces';
import { ref, set } from 'firebase/database';

export const createUserFirebase = async (user: UserFormProps) => {
  try {
    const response = (await createUser(
      user
    )) as ICreateUserCloudFunctionResponse;

    if (response.data.errorInfo) {
      return response;
    }

    const userId = response.data.uid;

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
