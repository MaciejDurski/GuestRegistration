import { getGuests } from '@/firebase/database/guest/getGuests';
import { IGuest } from '@/redux/guest/interfaces';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import i18next from 'i18next';
import { useEffect, useState } from 'react';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: i18next.t<string>('common.nameAndSurrname'),
    valueGetter: ({ row }) => `${row.firstName} ${row.lastName}`,
  },
  { field: 'email', headerName: i18next.t<string>('common.email') },
  { field: 'tel', headerName: i18next.t<string>('common.tel') },
  { field: 'checkIn', headerName: i18next.t<string>('guest.checkIn') },
  { field: 'arrival', headerName: i18next.t<string>('guestForm.arrivalDate') },
  {
    field: 'departure',
    headerName: i18next.t<string>('guestForm.departureDate'),
  },
  { field: 'type', headerName: i18next.t<string>('common.type') },
  { field: 'organizer', headerName: i18next.t<string>('common.guardian') },
  {
    field: 'accomodationComment',
    headerName: i18next.t<string>('guest.accommodationNote'),
  },
  {
    field: 'accommodation',
    headerName: i18next.t<string>('guest.accommodation'),
  },
  { field: 'ownsPc', headerName: i18next.t<string>('guest.ownComputer') },
  {
    field: 'speechLength',
    headerName: i18next.t<string>('guest.speechLength'),
  },
  {
    field: 'specialNeeds',
    headerName: i18next.t<string>('guest.specialRequirements'),
  },
];

const GuestsTable = () => {
  const [guests, setGuests] = useState<IGuest[]>([]);

  useEffect(() => {
    const guestGetter = async () => {
      const data = await getGuests();
      if (data) {
        setGuests(data);
      }
    };

    guestGetter();
  }, []);

  return (
    <>
      <DataGrid rows={guests} columns={columns} autoHeight />
    </>
  );
};

export default GuestsTable;
