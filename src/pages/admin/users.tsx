import AdminLayout from '@/components/AdminLayout/AdminLayout';
import { auth } from '@/firebase/config';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NextPageWithLayout } from '../_app';

const Users: NextPageWithLayout = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
    </>
  );
};

Users.getLayout = AdminLayout;

export default Users;
