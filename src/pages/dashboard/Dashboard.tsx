import { useGetTable } from "@app/supabase/useGetTable";
import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import PaginateTable from "@widgets/paginateTable/PaginateTable";

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

export default function Dashboard() {
  const { data } = useGetTable("article");

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>hi minus! </Typography>
      <div>
        <PaginateTable rows={data} columns={columns}></PaginateTable>
      </div>
    </Box>
  );
}
