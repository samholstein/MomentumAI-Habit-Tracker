import { createServerClient } from "@supabase/ssr";

type SupabaseServerClient = ReturnType<typeof createServerClient>;

export function createSupabaseServerClient(): SupabaseServerClient | undefined {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return undefined;
  }

  // Minimal no-op cookie handlers for compilation; real persistence will be wired later
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get() {
        return undefined;
      },
      set() {
        // no-op for now
      },
      remove() {
        // no-op for now
      },
    },
  });
}


