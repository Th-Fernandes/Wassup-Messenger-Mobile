import { supabase } from "./supabaseClient";

export const authActions = {
  async signInWithPassword(email:string, password:string) {
    const { data, error } = await supabase
      .auth
      .signInWithPassword({
        email,
        password,
      })
    
      if(error) {
        console.error(error)
        return false
      }
      return true
  },
  async getSession() {
    const { data, error } = await supabase.auth.getSession();

    return data
  }
}