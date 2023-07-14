import { useAppDispatch, useAppSelector } from '@/redux/store';
import { fetchUsers } from '@/redux/users/actions';
import { selectUsers } from '@/redux/users/selectors';
import { User } from 'firebase/auth';

export const useIsAdmin = (userAuth: User | null | undefined) => {
  let isAdmin;
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  if (!userAuth) {
    isAdmin = false;
    return { isAdmin };
  }

  if (users.length === 0) {
    dispatch(fetchUsers());
  }

  const currentUser = users.filter((user) => {
    return user.id === userAuth.uid;
  });

  if (currentUser.length === 0) {
    isAdmin = false;
  } else if (currentUser[0].isAdmin) {
    isAdmin = true;
  } else {
    isAdmin = false;
  }
  return { isAdmin };
};
