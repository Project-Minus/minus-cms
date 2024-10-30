import { useGetTable } from "@app/supabase/useGetTable";
import { Box, Typography } from "@mui/material";

export default function Dashboard() {
  const { data } = useGetTable("article");

  console.log(data);

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
    </Box>
  );
}
