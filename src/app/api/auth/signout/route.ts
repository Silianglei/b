import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const supabase = await createClient()
  
  const { error } = await supabase.auth.signOut()

  if (error) {
    return NextResponse.redirect(`${request.headers.get('origin')}/error`)
  }

  return NextResponse.redirect(`${request.headers.get('origin')}/`, {
    status: 302,
  })
}