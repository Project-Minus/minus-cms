import { Box, Typography } from "@mui/material";

export default function Columns() {
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
      <Typography>hi Columns!</Typography>
    </Box>
  );
}
