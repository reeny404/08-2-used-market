import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://apsgphedhjwggzzznbqo.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
console.log("supabaseKey", supabaseKey);
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);