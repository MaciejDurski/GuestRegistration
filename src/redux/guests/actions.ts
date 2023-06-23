import { getGuests } from '@/firebase/database/guest/getGuests';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGuests = createAsyncThunk('guests/fetchGuests', async () => {
  try {
    const data = await getGuests();
    if (data) {
      return data;
    }
  } catch (err) {
    console.error(err);
  }
  return [];
});
