import { supabase } from "./supabaseClient";

export interface MessagesTable {
  id?: string;
  message: string;
  username: string;
  created_at: string;
}

export const databaseActions = {
  selectAll: {
    async from(table:string, errorHandler:( error:any ) => void) {
      const { data, error } = await supabase
        .from(table)
        .select('*')
      
        if (error) errorHandler(error);
        return data;
    }
  }
}