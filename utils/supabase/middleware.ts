import { languages } from '@/constants/languages'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // Verifica o usuário
  const supportedLocales = languages;
  const { data: { user }, error } = await supabase.auth.getUser();

  // Obtém o primeiro e o segundo segmentos da URL
  const firstSegment = request.nextUrl.pathname.split('/')[1] || 'en';
  const secondSegment = request.nextUrl.pathname.split('/')[2] || '';

  // Se o primeiro segmento for um locale suportado, define locale e route de acordo
  // Caso contrário, assume que a URL não contém um locale e ajusta a rota de acordo
  const locale = supportedLocales.includes(firstSegment) ? firstSegment : 'en';
  const route = supportedLocales.includes(firstSegment) ? secondSegment : firstSegment;

  // Se o usuário não estiver autenticado e a rota não for "signup", redireciona para "signin"
  if (!user) {
    if (route === 'signup') {
      return response;
    } else {
      // Construir a URL de redirecionamento para "signin" considerando o locale
      const redirectUrl = new URL(`/${locale}/signin`, `${request.nextUrl.protocol}//${request.nextUrl.host}`);

      // Evitar redirecionamento em loop
      if (request.nextUrl.pathname !== redirectUrl.pathname) {
        return NextResponse.redirect(redirectUrl);
      }
    }
  } else {
    if (route === 'signup' || route === 'signin') {
      const redirectUrl = new URL(`/${locale}`, `${request.nextUrl.protocol}//${request.nextUrl.host}`);
  
      if (request.nextUrl.pathname !== redirectUrl.pathname) {
        return NextResponse.redirect(redirectUrl);
      }
    }
  }

  return response
}