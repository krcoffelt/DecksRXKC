import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

let browserClient: SupabaseClient | null = null

export function getSupabaseClient() {
  if (!isSupabaseConfigured || typeof window === 'undefined') {
    return null
  }

  browserClient ??= createClient(supabaseUrl, supabaseAnonKey)

  return browserClient
}
