import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://valvnwladcromjekvzyy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhbHZud2xhZGNyb21qZWt2enl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA4OTU3NTksImV4cCI6MTk2NjQ3MTc1OX0.qoL9JxEaW-RVi8at2FiB1t1RmhAaLKZ98vY01-bb1zo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})