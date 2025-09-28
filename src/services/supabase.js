import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ptkfjirbpefrfmcpkgrk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0a2ZqaXJicGVmcmZtY3BrZ3JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NTcwNjksImV4cCI6MjA3MjQzMzA2OX0.PvF-wr1xyWfCPKOpUd4cPAhndqGX8IvLx9N7TMC6KzQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
