import Loader from '@/components/common/Loader';
import GuestsContainer from '@/components/Guests/GuestsContainer';
import { auth } from '@/firebase/config';
import { t } from 'i18next';
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NextPageWithLayout } from '../_app';

const GuestsTable: NextPageWithLayout = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <Head>
        <title>{t('common.guests')}</title>
      </Head>
      {!loading && user ? <GuestsContainer /> : <Loader />}
    </>
  );
};

export default GuestsTable;
