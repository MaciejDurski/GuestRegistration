import { IUser } from '@/redux/users/interfaces';
import { useState, useMemo } from 'react';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import i18next from 'i18next';
import AdminActions from './AdminActions';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';
import { useIsAdmin } from '@/firebase/database/user/useIsAdmin';

interface IProps {
  users: IUser[];
}

const UsersTable = ({ users }: IProps) => {
  const [rowId, setRowId] = useState<GridRowId | null>(null);
  const [user] = useAuthState(auth);
  const { isAdmin } = useIsAdmin(user);

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
        editable: isAdmin && true,
      },
      {
        field: 'lastName',
        headerName: i18next.t<string>('common.lastName'),
        width: 100,
        editable: isAdmin && true,
      },
      {
        field: 'email',
        headerName: i18next.t<string>('common.email'),
        width: 180,
      },
      {
        field: 'tel',
        headerName: i18next.t<string>('common.tel'),
        width: 120,
        editable: isAdmin && true,
      },
      {
        field: 'isAdmin',
        headerName: i18next.t<string>('common.admin'),
        width: 100,
        type: 'boolean',
        editable: isAdmin && true,
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
