"use client"
import { createClient } from "@/utils/supabase/client";

export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { data: response, error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { success: false, error: error.message, userLogged: null};
  }

  const user = await supabase.auth.getUser();
  if(!user) {
    return { success: false, error: 'Authentication failed', userLogged: null};
  }
  return { success: true, error: null, userLogged: user};
}