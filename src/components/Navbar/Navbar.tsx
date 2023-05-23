import { logoutUser } from '@/firebase/auth/logoutUser';
import { auth } from '@/firebase/config';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import { t } from 'i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const logout = () => {
    logoutUser();
    router.push('/');
  };

  return (
    <Stack direction="row" p={4} spacing={4} alignItems="center">
      <Link href="/">GuestRegistration / Home</Link>
      {user ? (
        <>
          <Button variant="outlined" onClick={logout}>
            {t('common.logout')}
          </Button>
          <Link href="/admin">Guests Table</Link>
          <div>hello {user.email}</div>
        </>
      ) : (
        <Button variant="outlined">
          <Link href="/login">{t('common.login')}</Link>
        </Button>
      )}
    </Stack>
  );
};
