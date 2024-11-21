import { useGetTable } from "@app/supabase/useGetTable";
import { Container } from "@mui/material";
import Select from "@shared/select/Select";
import PaginatedTable from "@widgets/paginateTable/PaginatedTable";
import { useMemo, useState } from "react";
import { dataColumn } from "./constants/columns";

export default function Tables() {
  const [selectedTable, setSelectedTable] = useState<string>("article");
  const [selectedRow, setSelectedRow] = useState<string[]>([]);
  const { data } = useGetTable(selectedTable);
  const rowData = Array.isArray(data) ? data : [];
  const dataTables = [
    { label: "article", value: "article" },
    { label: "category", value: "category" },
    { label: "user", value: "user" },
  ];

  const onChangeSelect = (value: string) => {
    setSelectedTable(value);
    setSelectedRow([]);
  };

  const handleSelectRow = (values: Array<string>) => {
    setSelectedRow(values);
  };

  const currentCloumns = useMemo(() => {
    if (!selectedTable) {
      return dataColumn.article;
    }
    return dataColumn?.[selectedTable];
  }, [selectedTable]);

  return (
    <Container
      style={{
        maxWidth: "1500px",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "flex-end",
      }}
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Select
        selectKey="data-base-table-selector"
        value={selectedTable}
        options={dataTables}
        onChange={onChangeSelect}
      />
      {/* <PaginateTable rows={data} columns={currentCloumns} /> */}
      <PaginatedTable
        tableName={selectedTable}
        rows={rowData}
        columns={currentCloumns}
        selected={selectedRow}
        setSelected={handleSelectRow}
      />
    </Container>
  );
}
