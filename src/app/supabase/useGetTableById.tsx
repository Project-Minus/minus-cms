import { Database } from "@shared/types/tableType";
import { useQuery } from "@tanstack/react-query";
import { filterEqualTable } from "./init";

export const useGetTableById = <T extends Database>(
  tableName: string,
  columnName: string,
  columnValue: unknown,
) => {
  const { data: tableData }: { data: { data: Array<T> } } = useQuery({
    queryKey: ["table", tableName, columnName, columnValue],
    queryFn: () =>
      filterEqualTable(tableName, columnName, columnValue).catch(console.error),
  });

  return { data: tableData?.data };
};
