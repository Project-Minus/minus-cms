import { useGetTable } from "@app/supabase/useGetTable";
import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import Select from "@shared/select/Select";
import PaginateTable from "@widgets/paginateTable/PaginateTable";
import { useState } from "react";

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

export default function Tables() {
  const [selectedTable, setSelectedTable] = useState<string>("");
  const { data } = useGetTable(selectedTable);

  const dataTables = [
    { label: "article", value: "article" },
    { label: "category", value: "category" },
    { label: "user", value: "user" },
  ];

  const onChangeSelect = (value: string) => {
    setSelectedTable(value);
  };

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
      <Typography>hi Tables!</Typography>
      <Select
        value={selectedTable}
        options={dataTables}
        placeholder="table"
        onChange={onChangeSelect}
      />
      <PaginateTable rows={data} columns={columns} />
    </Box>
  );
}
