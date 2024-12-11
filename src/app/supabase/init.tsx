import { Database } from "@shared/types/tableType";
import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey);

//get
export const getAllTable = async (tableName: string) => {
  const { data, error } = await supabase.from(tableName).select("*");

  return { data, error };
};

// 블로그 생성
export const postBlogWriteData = async (
  postData,
  onSuccess?: () => void,
  onFail?: () => void,
) => {
  const { data, error } = await supabase
    .from("article")
    .insert([postData])
    .select();
  if (error) {
    onFail?.();
    console.error("Error inserting data:", error);
  } else {
    onSuccess?.();
    console.log("Inserted data:", data);
  }
};

export const getPaginatedTable = async (
  tableName: string,
  startIndex: number,
  endIndex: number,
) => {
  const { data, error } = await supabase
    .from(tableName)
    .select("*")
    .range(startIndex, endIndex);

  return { data, error };
};

//filter

//원하는 value 와 동일한 값을 가진 column 찾기
export const filterEqualTable = async (
  tableName: string,
  columnName: string,
  columnValue: unknown,
) => {
  const { data, error } = await supabase
    .from(tableName)
    .select("*")
    .eq(columnName, columnValue);

  return { data, error };
};

//원하는 value를 포함한 값을 가진 column 찾기
//ex) 'click' => 'onClick (O) , 검색과 같은 기능
export const filterSearchTable = async (
  tableName: string,
  columnName: string,
  columnValue: string,
) => {
  const { data, error } = await supabase
    .from(tableName)
    .select("*")
    .ilike(columnName, columnValue);

  return { data, error };
};

//여러개의 값을 보내고 그중에 포함되는지 검색
// ex) 'click' => ['click','drag'] (O)
export const filterContainTable = async (
  tableName: string,
  columnName: string,
  columnValue: Array<string>,
) => {
  const { data, error } = await supabase
    .from(tableName)
    .select("*")
    .in(columnName, columnValue);

  return { data, error };
};

//column값이 array일때 포함여부 찾기
//ex) ['click'] => ['click','drag'] (O)
//위 메소드와 다른점은 이 부분은 data의 값이 array일 때 사용하는 메소드
export const filterContainArrayTable = async (
  tableName: string,
  columnName: string,
  columnValue: Array<string>,
) => {
  const { data, error } = await supabase
    .from(tableName)
    .select("*")
    .containedBy(columnName, columnValue);

  return { data, error };
};

//post
//data 추가 메서드
//[{id:1,name:hi}, {id:2,name:hello}...]
export const setRows = async (
  tableName: string,
  insertValue: Array<{ [key: string]: unknown }>,
) => {
  const { data, error } = await supabase
    .from(tableName)
    .insert(insertValue)
    .select();

  return { data, error };
};

//put
//단일 업데이트
export const updateRow = async (tableName: string, updateValue: Database) => {
  const { data, error } = await supabase
    .from(tableName)
    .update(updateValue)
    .eq("id", updateValue.id)
    .select();

  return { data, error };
};

//delete

//단일 삭제
export const deleteRow = async (
  tableName: string,
  columnName: string,
  columnValue: unknown,
) => {
  const { data, error } = await supabase
    .from(tableName)
    .delete()
    .eq(columnName, columnValue);

  return { data, error };
};

//복수 삭제
export const deleteRows = async (
  tableName: string,
  columnName: string,
  columnValue: Array<unknown>,
) => {
  const { data, error } = await supabase
    .from(tableName)
    .delete()
    .in(columnName, columnValue as Array<string>);

  return { data, error };
};
