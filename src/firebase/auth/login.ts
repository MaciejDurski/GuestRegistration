import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../config';
import { ILogin } from '@/pages/login';

const auth = getAuth(firebaseApp);

export const loginUser = async (values: ILogin) => {
  const { userEmail, password } = values;

  const userCredential = await signInWithEmailAndPassword(
    auth,
    userEmail,
    password
  );
  console.log(userCredential.user);
};
