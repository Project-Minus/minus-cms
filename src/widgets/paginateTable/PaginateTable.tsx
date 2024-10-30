import { Article } from "@app/supabase/tableType";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 500 },
  { field: "title", headerName: "Title", width: 200 },
  {
    field: "description",
    headerName: "Description",
    width: 500,
  },
  { field: "created_at", headerName: "Created At", width: 300 },
];

const paginationModel = { page: 0, pageSize: 5 };

interface Props {
  rows: Array<Article>;
}
export default function PaginateTable(props: Props) {
  const { rows } = props;

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
