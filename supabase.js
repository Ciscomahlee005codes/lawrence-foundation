  import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

  const SUPABASE_URL = "https://koymduqmigwomzmijzur.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtveW1kdXFtaWd3b216bWlqenVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4OTE5MjMsImV4cCI6MjA4MzQ2NzkyM30.l6wF6mvdT6GkfYVY9t85sCEH4TdvmHS8TdXY_fgy9yk";

  export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

