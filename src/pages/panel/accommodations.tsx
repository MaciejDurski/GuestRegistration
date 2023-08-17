import Accommodations from '@/components/Accommodations/Accommodations';
import Loader from '@/components/common/Loader';
import { auth } from '@/firebase/config';
import { t } from 'i18next';
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';

const AccommodationsTable = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <Head>
        <title>{t('common.accommodations')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!loading && user ? <Accommodations /> : <Loader />}
    </>
  );
};

export default AccommodationsTable;
