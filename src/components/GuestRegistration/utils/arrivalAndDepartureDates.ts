const currentDate = new Date();
const currentYear = currentDate.getUTCFullYear();

export const arrivalDate = new Date(`${currentYear}-09-06T00:00:00.000Z`);
export const departureDate = new Date(`${currentYear}-09-11T00:00:00.000Z`);

export const formatDate = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  const addZero = (num: number) => `${num}`.padStart(2, '0');

  const formattedDate = `${addZero(day)}-${addZero(month + 1)}-${year}`;

  return formattedDate;
};
