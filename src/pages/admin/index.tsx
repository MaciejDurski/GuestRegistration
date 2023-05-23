import AdminLayout from '@/components/AdminLayout/AdminLayout';
import GuestsTableContainer from '@/components/GuestsTable/GuestsTable.container';
import Head from 'next/head';
import { NextPageWithLayout } from '../_app';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';
import { useEffect } from 'react';

const Guests: NextPageWithLayout = () => {
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
        <title>Guests</title>
      </Head>
      {!loading && user ? <GuestsTableContainer /> : <div>loading...</div>}
    </>
  );
};

Guests.getLayout = AdminLayout;

export default Guests;
