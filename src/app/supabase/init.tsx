import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey);

export const getAllTable = async (tableName: string) => {
  const { data, error } = await supabase.from(tableName).select("*");

  return { data, error };
};
