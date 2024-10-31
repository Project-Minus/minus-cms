import { Box, Typography } from "@mui/material";
import SwitchList from "@widgets/switchList/SwitchList";

export default function PostCategories() {
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
      <Typography>hi categories!</Typography>
      <SwitchList list={[]} listHeader="" />
    </Box>
  );
}
