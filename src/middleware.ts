import { auth } from '@/app/_lib/auth';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
export const middleware = auth;

// export function middleware(request: NextRequest) {
// 	return NextResponse.redirect(new URL('/', request.url));
// }

export const config = {
	matcher: ['/about'],
};
