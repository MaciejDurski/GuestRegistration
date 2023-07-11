import { deleteGuest, updateGuest } from '@/redux/guests/actions';
import { useAppDispatch } from '@/redux/store';
import { Check, Delete, Save } from '@mui/icons-material';
import { Box, CircularProgress, Fab } from '@mui/material';
import { GridCellParams, GridRowId } from '@mui/x-data-grid';
import i18next from 'i18next';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface IProps {
  params: GridCellParams;
  rowId: GridRowId | null;
  setRowId: Dispatch<SetStateAction<GridRowId | null>>;
}

const UsersActions = ({ params, rowId, setRowId }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    setLoading(true);

    const result = await dispatch(updateGuest(params.row));

    if (result) {
      setSuccess(true);
      setRowId(null);
    }

    setLoading(false);
  };

  const handleDelete = async () => {
    if (window.confirm(i18next.t<string>('validation.deleteGuest'))) {
      setLoading(true);

      const result = await dispatch(deleteGuest(params.row.id));

      if (result) {
        setSuccess(true);
        setRowId(null);
      }

      setLoading(false);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId]);

  return (
    <Box sx={{ m: 1, posittion: 'relative' }}>
      {success ? (
        <Fab color="success" sx={{ width: 40, height: 40 }}>
          <Check />
        </Fab>
      ) : (
        <Fab
          sx={{ width: 40, height: 40 }}
          color="primary"
          disabled={params.id !== rowId || loading}
          onClick={handleSubmit}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={45}
          color="primary"
          sx={{ position: 'absolute', top: 2, left: 3, zIndex: 1 }}
        />
      )}
      <Fab
        sx={{ width: 40, height: 40, ml: 1 }}
        color="error"
        disabled={params.id !== rowId || loading}
        onClick={handleDelete}
      >
        <Delete />
      </Fab>
      {loading && (
        <CircularProgress
          size={45}
          color="primary"
          sx={{ position: 'absolute', top: 2, left: 52, zIndex: 1 }}
        />
      )}
    </Box>
  );
};

export default UsersActions;
