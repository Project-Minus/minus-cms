import { Article } from "@app/supabase/tableType";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const paginationModel = { page: 0, pageSize: 5 };

interface Props {
  rows: Array<Article>;
  columns: Array<GridColDef>;
}
export default function PaginateTable(props: Props) {
  const { rows, columns } = props;

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
