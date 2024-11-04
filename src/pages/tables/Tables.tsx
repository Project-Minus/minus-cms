import { useGetTable } from "@app/supabase/useGetTable";
import { Box, Typography } from "@mui/material";
import Select from "@shared/select/Select";
import PaginateTable from "@widgets/paginateTable/PaginateTable";
import { useMemo, useState } from "react";
import { dataColumns } from "./constants/columns";

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

  const currentCloumns = useMemo(() => {
    if (!selectedTable) {
      return dataColumns.article;
    }
    return dataColumns?.[selectedTable];
  }, [selectedTable]);

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
      <PaginateTable rows={data} columns={currentCloumns} />
    </Box>
  );
}
