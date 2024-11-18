import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Database } from "@shared/types/tableType";

const paginationModel = { page: 0, pageSize: 5 };

interface Props {
  rows: Array<Database>;
  columns: Array<GridColDef>;
}
export default function PaginateTable(props: Props) {
  const { rows, columns } = props;

  return (
    <Paper sx={{ height: "100%", width: "95%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{
          border: 0,
          width: "100%",
        }}
      />
    </Paper>
  );
}
