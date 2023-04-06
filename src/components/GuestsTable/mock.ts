import { GridRowsProp } from "@mui/x-data-grid";

export const rows: GridRowsProp = [
  {
    id: 1,
    name: "Kasia Durska",
    email: "kasia.durska@wp.pl",
    phone: "12312313",
    checkIn: false,
    type: "guest",
    organizer: 2,
    accommodationNote: "",
    accommodation: "Jagienka",
    ownComputer: false,
    presentationLength: "1:20",
    specialRequirements: "Szklanka wody",
  },
  {
    id: 2,
    name: "Michał Durski",
    email: "michal.durski@gmail.com",
    phone: "11316633",
    checkIn: true,
    type: "guest",
    organizer: 2,
    accommodationNote: "",
    accommodation: "Jagienka",
    ownComputer: false,
    presentationLength: "1:20",
    specialRequirements: "Szklanka wody",
  },
];
