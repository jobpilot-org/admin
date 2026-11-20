import { createClient } from "@supabase/supabase-js";

// Zentrale Supabase-Datenbank aus ../backend, wie in den anderen jobpilot-Apps. Werte aus
// .env.local (Vorlage: .env.example); ohne sie die lokale Instanz (`supabase start`).
// Der Publishable Key ist öffentlich; er gibt nur frei, was RLS dem Aufrufer erlaubt.
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "http://127.0.0.1:54321";
export const SUPABASE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH";

export function createSupabase() {
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
}
