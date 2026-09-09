import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "https://zzktbnlrhbbnuencvdtb.supabase.co";
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6a3RibmxyaGJibnVlbmN2ZHRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NzExNDUsImV4cCI6MjA4NTM0NzE0NX0.vWIekiWxIPce1JWOlwwPkm5TCGDu_qus9rgQyH-OWuo";

export const supabase = createClient(supabaseUrl, supabaseKey);
