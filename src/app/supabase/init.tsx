import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey);

//get
export const getAllTable = async (tableName: string) => {
  const { data, error } = await supabase.from(tableName).select("*");

  return { data, error };
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

//delete

export const deleteRows = async (
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
