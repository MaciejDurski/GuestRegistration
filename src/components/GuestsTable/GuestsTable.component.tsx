import { IGuest } from '@/redux/guests/interfaces';
import { IUser } from '@/redux/users/interfaces';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import i18next from 'i18next';
import { useMemo, useState } from 'react';
import { speechLengthOptions } from '../GuestRegistration/speechLengthOptions';
import { formatPolishTelNumber } from './formatPolishTelNumber';
import UsersActions from './UsersActions';

interface IProps {
  guests: IGuest[];
  users: IUser[];
}

const GuestsTable = ({ guests, users }: IProps) => {
  const [rowId, setRowId] = useState<GridRowId | null>(null);

  const usersNames = users.map((user) => {
    return `${user.firstName} ${user.lastName}`;
  });

  const speechLengthOptionsArray = Object.entries(speechLengthOptions).map(
    ([name]) => {
      return name;
    }
  );

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'actions',
        headerName: i18next.t<string>('common.actions'),
        width: 100,
        type: 'actions',
        renderCell: (params) => (
          <UsersActions {...{ params, rowId, setRowId }} />
        ),
      },
      {
        field: 'firstName',
        headerName: i18next.t<string>('common.firstName'),
        width: 100,
        editable: true,
      },
      {
        field: 'lastName',
        headerName: i18next.t<string>('common.lastName'),
        width: 100,
        editable: true,
      },
      {
        field: 'email',
        headerName: i18next.t<string>('common.email'),
        width: 130,
        editable: true,
      },
      {
        field: 'tel',
        headerName: i18next.t<string>('common.tel'),
        width: 110,
        valueGetter: ({ row }) => formatPolishTelNumber(row.tel),
        editable: true,
      },
      {
        field: 'checkIn',
        headerName: i18next.t<string>('guest.checkIn'),
        width: 67,
        type: 'boolean',
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
        valueGetter: ({ row }) =>
          `${dayjs(row.departure).format('DD/MM/YYYY')}`,
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
        width: 100,
        valueGetter: ({ row }) =>
          !row.organizer
            ? i18next.t<string>('common.none').toUpperCase()
            : row.organizer,
        type: 'singleSelect',
        valueOptions: [
          i18next.t<string>('common.none').toUpperCase(),
          ...usersNames,
        ],
        editable: true,
      },
      {
        field: 'accomodationComment',
        headerName: i18next.t<string>('guest.accommodationNote'),
        width: 100,
        editable: true,
      },
      {
        field: 'accomodation',
        headerName: i18next.t<string>('guest.accommodation'),
        width: 50,
        editable: true,
      },
      {
        field: 'presents',
        headerName: i18next.t<string>('guest.presents'),
        width: 50,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'ownsPc',
        headerName: i18next.t<string>('guest.ownComputer'),
        width: 50,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'speechLength',
        headerName: i18next.t<string>('guest.speechLength'),
        width: 60,
        type: 'singleSelect',
        valueGetter: ({ row }) =>
          !row.speechLength
            ? i18next.t<string>('common.none').toUpperCase()
            : row.speechLength,
        valueOptions: [
          i18next.t<string>('common.none').toUpperCase(),
          ...speechLengthOptionsArray,
        ],
        editable: true,
      },
      {
        field: 'specialNeeds',
        headerName: i18next.t<string>('guest.specialRequirements'),
        editable: true,
      },
    ],
    [rowId, usersNames, speechLengthOptionsArray]
  );

  return (
    <DataGrid
      rows={guests}
      columns={columns}
      autoHeight
      editMode="row"
      getRowId={(row) => row.id}
      onRowEditStart={(params) => setRowId(params.id)}
      // onRowEditStop={(params) => setRowId(params.id)}
      // onCellEditStart={(params) => setRowId(params.id)}
    />
  );
};

export default GuestsTable;
