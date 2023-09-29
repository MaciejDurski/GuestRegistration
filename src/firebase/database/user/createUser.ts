import { createUser } from '@/firebase/cloudFunctions';
import { db } from '@/firebase/config';
import {
  ICloudFunctionResponse,
  UserFormProps,
} from '@/redux/users/interfaces';
import { ref, set } from 'firebase/database';

export const createUserFirebase = async (user: UserFormProps) => {
  try {
    const result = await createUser(user);
    console.log(result);

    const unknownData = result.data as ICloudFunctionResponse;

    if (unknownData.errorInfo) {
      return unknownData;
    }

    const userId = unknownData.uid;

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
