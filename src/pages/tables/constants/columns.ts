import { GridColDef } from "@mui/x-data-grid";

export const dataColumns: { [key: string]: GridColDef[] } = {
  article: [
    { field: "id", headerName: "ID", width: 500 },
    { field: "title", headerName: "Title", width: 200 },
    {
      field: "description",
      headerName: "Description",
      width: 500,
    },
    { field: "created_at", headerName: "Created At", width: 300 },
  ],
  category: [
    { field: "id", headerName: "ID", width: 500 },
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "description",
      headerName: "Description",
      width: 500,
    },
    { field: "created_at", headerName: "Created At", width: 300 },
  ],
  user: [
    { field: "id", headerName: "ID", width: 500 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "age", headerName: "Age", width: 200 },
    {
      field: "email",
      headerName: "Email",
      width: 500,
    },
    { field: "created_at", headerName: "Created At", width: 300 },
  ],
};
