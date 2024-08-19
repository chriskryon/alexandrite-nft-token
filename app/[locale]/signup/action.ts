'use client'
import { createClient } from "@/utils/supabase/client";

export async function signup(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        display_name: formData.get('name') as string,
      },
    }
  }

  const { data: response, error } = await supabase.auth.signUp(data)

  if (error) {
    console.error('Error signing up:', error)
    if (error.code === 'weak_password') {
      return { success: false, error: 'The password provided is too weak. It must be at least 6 characters long.', userCreated: null }
    }
    return { success: false, error: error.message, userCreated: null }
  }
  return { success: true, error: null, userCreated: response.user }

}