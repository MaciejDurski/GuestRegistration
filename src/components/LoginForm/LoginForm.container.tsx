import { loginUser } from '@/firebase/auth/loginUser';
import { useRouter } from 'next/router';
import { LoginForm } from './LoginForm.component';
import { USER_PANEL } from '@/constants/routes';

export interface ILogin {
  userEmail: string;
  password: string;
}

export const LoginFormContainer = () => {
  const router = useRouter();

  const handleLogin = async (values: ILogin) => {
    await loginUser(values);
    router.replace(USER_PANEL);
  };

  return <LoginForm handleLogin={handleLogin} />;
};
