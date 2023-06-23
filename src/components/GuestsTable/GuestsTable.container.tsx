import { fetchGuests } from '@/redux/guests/actions';
import { selectGuests } from '@/redux/guests/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect } from 'react';
import GuestsTable from './GuestsTable.component';

const GuestsTableContainer = () => {
  const guests = useAppSelector(selectGuests);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGuests());
  }, [dispatch]);

  return <GuestsTable guests={guests} />;
};

export default GuestsTableContainer;
