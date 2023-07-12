import {
  GUEST,
  LANDING_PAGE,
  LOGIN,
  USER_FORM,
  USER_PANEL,
} from '@/constants/routes';
import { logoutUser } from '@/firebase/auth/logoutUser';
import { auth } from '@/firebase/config';
import { Box, Button, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { t } from 'i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../public/logo.png';
import AdminNavbar from './AdminNavbar';

export const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const logout = async () => {
    await logoutUser();
    router.push(GUEST);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{
        pt: 1,
        minHeight: '85px',
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: { xs: 'flex-end', sm: 'space-between' },
          }}
        >
          <Box display={{ xs: 'none', md: 'flex' }}>
            <Link href={LANDING_PAGE}>
              <Image
                src={logo}
                width={180}
                height={65}
                alt="Festival logo"
                priority
              />
            </Link>
          </Box>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
            width={{ xs: '100%' }}
            justifyContent={{ xs: 'center', sm: 'flex-end' }}
            alignItems={{ xs: 'center' }}
          >
            {user && !loading && (
              <>
                <Link href={GUEST}>
                  <Button color="primary">
                    {t('common.guestRegistration')}
                  </Button>
                </Link>
                <Link href={USER_FORM}>
                  <Button color="primary">{t('common.userForm')}</Button>
                </Link>
                <Link href={USER_PANEL}>
                  <Button color="primary">{t('common.userPanel')}</Button>
                </Link>
                <Typography
                  color="primary"
                  display={{ xs: 'none', md: 'flex' }}
                >
                  {t('common.hello')} {user.email}
                </Typography>
                <Button variant="outlined" onClick={logout}>
                  {t('common.logout')}
                </Button>
              </>
            )}
            {!user && !loading && (
              <Button variant="outlined">
                <Link href={LOGIN}>{t('common.organizer')}</Link>
              </Button>
            )}
          </Stack>
        </Toolbar>
        {router.pathname.includes(USER_PANEL) && <AdminNavbar />}
      </Container>
    </AppBar>
  );
};
