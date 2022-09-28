import { supabase } from "./supabaseClient";

export interface MessagesTable {
  id?: string;
  message: string;
  username: string;
  created_at: string;
  session_id?: string;
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
  },
  insert: {
    from(table:string) {
      return {
        async insert(newRow:object | object[]) {
          const { data, error } = await supabase
          .from(this.table)
          .insert(newRow)

          console.log(error)
        },
        table
      }
    }
  }
}