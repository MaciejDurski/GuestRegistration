import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { rows } from "./mock";
import i18next from "i18next";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: i18next.t<string>("common.nameAndSurrname"),
  },
  { field: "email", headerName: i18next.t<string>("common.email") },
  { field: "phone", headerName: i18next.t<string>("common.phone") },
  { field: "checkIn", headerName: i18next.t<string>("guest.checkIn") },
  { field: "type", headerName: i18next.t<string>("common.type") },
  { field: "organizer", headerName: i18next.t<string>("common.guardian") },
  {
    field: "accommodationNote",
    headerName: i18next.t<string>("guest.accommodationNote"),
  },
  {
    field: "accommodation",
    headerName: i18next.t<string>("guest.accommodation"),
  },
  { field: "ownComputer", headerName: i18next.t<string>("guest.ownComputer") },
  {
    field: "presentationLength",
    headerName: i18next.t<string>("guest.presentationLength"),
  },
  {
    field: "specialRequirements",
    headerName: i18next.t<string>("guest.specialRequirements"),
  },
];

const GuestsTable = () => {
  return <DataGrid rows={rows} columns={columns} autoHeight />;
};

export default GuestsTable;
