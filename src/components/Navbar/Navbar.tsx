import { logoutUser } from '@/firebase/auth/logoutUser';
import { auth } from '@/firebase/config';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
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
      <Link href="/">Home</Link>
      <Link href="/admin">Admin Panel</Link>
      {user ? (
        <>
          <Button variant="outlined" onClick={logout}>
            Logout
          </Button>
          <div>hello {user.email}</div>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </Stack>
  );
};
