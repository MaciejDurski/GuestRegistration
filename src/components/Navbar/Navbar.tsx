import { Stack } from '@mui/system';
import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <Stack direction="row" p={4} spacing={4}>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/admin">Admin Panel</Link>
    </Stack>
  );
};
