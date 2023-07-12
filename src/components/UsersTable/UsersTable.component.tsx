import { IUser } from '@/redux/users/interfaces';
import { useState, useMemo } from 'react';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import i18next from 'i18next';
import AdminActions from './AdminActions';

interface IProps {
  users: IUser[];
}

const UsersTable = ({ users }: IProps) => {
  const [rowId, setRowId] = useState<GridRowId | null>(null);

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'actions',
        headerName: i18next.t<string>('common.actions'),
        width: 100,
        type: 'actions',
        renderCell: (params) => (
          <AdminActions {...{ params, rowId, setRowId }} />
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
        width: 180,
        editable: true,
      },
      {
        field: 'tel',
        headerName: i18next.t<string>('common.tel'),
        width: 120,
        editable: true,
      },
      {
        field: 'isAdmin',
        headerName: i18next.t<string>('common.admin'),
        width: 100,
        type: 'boolean',
        editable: true,
      },
    ],
    [rowId]
  );

  return (
    <DataGrid
      rows={users}
      columns={columns}
      autoHeight
      editMode="row"
      getRowId={(row) => row.id}
      onRowEditStart={(params) => setRowId(params.id)}
    />
  );
};

export default UsersTable;
