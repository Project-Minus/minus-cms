import { useGetTable } from "@app/supabase/useGetTable";
import { Box, Typography } from "@mui/material";
import PaginateTable from "@widgets/paginateTable/PaginateTable";

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
        <PaginateTable rows={data}></PaginateTable>
      </div>
    </Box>
  );
}
