import dayjs from 'dayjs';

const currentYear = new Date().getFullYear();

export const arrivalDate = dayjs.utc(
  new Date(`${currentYear}-09-06T00:00:00.000Z`)
);
export const departureDate = dayjs.utc(
  new Date(`${currentYear}-09-11T00:00:00.000Z`)
);

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const addZero = (num: number) => `${num}`.padStart(2, '0');

  const formattedDate = `${addZero(day)}-${addZero(month + 1)}-${year}`;

  return formattedDate;
};
