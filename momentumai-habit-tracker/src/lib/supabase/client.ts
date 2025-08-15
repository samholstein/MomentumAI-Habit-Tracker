import { createBrowserClient } from "@supabase/ssr";

type SupabaseBrowserClient = ReturnType<typeof createBrowserClient>;

export function createSupabaseBrowserClient(): SupabaseBrowserClient | undefined {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Avoid throwing during build/prerender; caller should guard against undefined
    if (process.env.NODE_ENV !== "production") console.warn("Supabase env not set; browser client unavailable.");
    return undefined;
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}


