import { Paper, Stack } from "@mui/material";

export default function Traffics() {
  return (
    <div style={{ padding: 15 }}>
      <Paper sx={{ height: 350, marginBottom: "15px" }}>
        미스타 마이크로녹타시옥스
      </Paper>
      <Stack
        style={{ width: "100%", height: "100%" }}
        direction="row"
        spacing={2}
      >
        <Paper sx={{ width: "50%", height: "100%" }}>
          미스타 마이크로녹서스의단두대
        </Paper>
        <Paper sx={{ width: "50%", height: "100%" }}>
          미스타 킹갓엠퍼러충무공마이너스
        </Paper>
      </Stack>
    </div>
  );
}
