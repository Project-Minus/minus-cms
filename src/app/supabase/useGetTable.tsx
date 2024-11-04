import { Database } from "@shared/types/tableType";
import { useQuery } from "@tanstack/react-query";
import { getAllTable } from "./init";

export const useGetTable = <T extends Database>(tableName: string) => {
  const { data: tableData }: { data: { data: Array<T> } } = useQuery({
    queryKey: ["table", tableName],
    queryFn: () => getAllTable(tableName).catch(console.error),
  });

  return { data: tableData?.data };
};
