import firebaseApp from '@/firebase/config';
import { IGuest } from '@/redux/guest/interfaces';
import { child, get, getDatabase, ref } from 'firebase/database';

export const getGuests = async () => {
  const dbRef = ref(getDatabase(firebaseApp));

  const data = await get(child(dbRef, `guests/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const arrayData = Object.entries(data).map((entry) => ({
          ...(entry[1] as IGuest),
          id: entry[0],
        }));
        return arrayData;
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return data;
};
