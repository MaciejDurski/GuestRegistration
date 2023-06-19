import { IGuest } from '@/redux/guest/interfaces';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import i18next from 'i18next';
import { rows } from '../UsersTable/mock';

const users = rows.map((row) => {
  return `${row.firstName} ${row.lastName}`;
});

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: i18next.t<string>('common.nameAndSurrname'),
    valueGetter: ({ row }) => `${row.firstName} ${row.lastName}`,
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: i18next.t<string>('common.email'),
    width: 200,
    editable: true,
  },
  { field: 'tel', headerName: i18next.t<string>('common.tel'), editable: true },
  {
    field: 'checkIn',
    headerName: i18next.t<string>('guest.checkIn'),
    editable: true,
  },
  {
    field: 'arrival',
    headerName: i18next.t<string>('guestForm.arrivalDate'),
    valueGetter: ({ row }) => `${dayjs(row.arrival).format('DD/MM/YYYY')}`,
    editable: true,
  },
  {
    field: 'departure',
    headerName: i18next.t<string>('guestForm.departureDate'),
    valueGetter: ({ row }) => `${dayjs(row.departure).format('DD/MM/YYYY')}`,
    editable: true,
  },
  {
    field: 'type',
    headerName: i18next.t<string>('common.type'),
    width: 50,
    editable: true,
  },
  {
    field: 'organizer',
    headerName: i18next.t<string>('common.guardian'),
    valueGetter: ({ row }) =>
      !row.organizer ? i18next.t<string>('common.assign') : row.organizer,
    type: 'singleSelect',
    valueOptions: [i18next.t<string>('common.assign'), ...users],
    editable: true,
  },
  {
    field: 'accomodationComment',
    headerName: i18next.t<string>('guest.accommodationNote'),
    editable: true,
  },
  {
    field: 'accommodation',
    headerName: i18next.t<string>('guest.accommodation'),
    editable: true,
  },
  {
    field: 'presents',
    headerName: i18next.t<string>('guest.presents'),
    type: 'boolean',
    editable: true,
  },
  {
    field: 'ownsPc',
    headerName: i18next.t<string>('guest.ownComputer'),
    type: 'boolean',
    editable: true,
  },
  {
    field: 'speechLength',
    headerName: i18next.t<string>('guest.speechLength'),
    editable: true,
  },
  {
    field: 'specialNeeds',
    headerName: i18next.t<string>('guest.specialRequirements'),
    editable: true,
  },
];

interface IProps {
  guests: IGuest[];
}

const GuestsTable = ({ guests }: IProps) => {
  return (
    <DataGrid
      rows={guests}
      columns={columns}
      getRowId={(row) => row.id}
      autoHeight
    />
  );
};

export default GuestsTable;
