import { NextRequest, NextResponse } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';
import createMiddleware from 'next-intl/middleware';
import { languages } from './constants/languages';

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: languages,

  // Used when no locale matches
  defaultLocale: 'en',
  localeDetection: false
});

export async function middleware(request: NextRequest) {
  const intlResponse = nextIntlMiddleware(request);

  const response = await updateSession(request);
  
  if (response.headers.get('location')) {
    return response;
  }
  return intlResponse;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};