// /middleware/auth.js
import { NextResponse } from 'next/server';

// Define the middleware function
export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Protect blog routes
  if (pathname.startsWith('/blog')) {
    // Retrieve the token from cookies (adjust the key as needed)
    const token = req.cookies.get('your_token_name'); // Change 'your_token_name' to your actual cookie name

    // If no token, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    // Optionally, you can validate the token here
    // Example: If you have an API to validate the token, you can call it and check its validity
    // const isValid = await validateToken(token);
    // if (!isValid) {
    //   return NextResponse.redirect(new URL('/admin/login', req.url));
    // }
  }

  // Allow the request to proceed if the user is authenticated
  return NextResponse.next();
}

// Middleware configuration for Next.js
export const config = {
  matcher: ['/blog/:path*'], // This applies the middleware only to blog routes
};
