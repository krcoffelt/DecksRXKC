import type { SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

let browserClient: SupabaseClient | null = null

/** Loads the Supabase client on first use so pages don't ship it until a form is submitted. */
export async function getSupabaseClient() {
  if (!isSupabaseConfigured || typeof window === 'undefined') {
    return null
  }

  if (!browserClient) {
    const { createClient } = await import('@supabase/supabase-js')
    browserClient = createClient(supabaseUrl, supabaseAnonKey)
  }

  return browserClient
}
