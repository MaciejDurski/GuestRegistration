import { Box, CircularProgress, Fab } from '@mui/material';
import { Check, Save } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { GridCellParams, GridRowId } from '@mui/x-data-grid';
import { updateGuest } from '@/redux/guests/actions';
import { useAppDispatch } from '@/redux/store';

interface IProps {
  params: GridCellParams;
  rowId: GridRowId | null;
  setRowId: (arg: null) => void;
}

const UsersActions = ({ params, rowId, setRowId }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    setLoading(true);
    console.log(params);
    const result = await dispatch(updateGuest(params.row));

    if (result) {
      setSuccess(true);
      setRowId(null);
    }
    setLoading(false);
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
          sx={{ position: 'absolute', top: 2, left: 2, zIndex: 1 }}
        />
      )}
    </Box>
  );
};

export default UsersActions;
