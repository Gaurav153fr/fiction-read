import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  
    // Extract the session token from the request
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    console.log("Token:", token); // Log token for debugging

    // Redirect to login page if not authenticated and accessing protected routes
    if (!token) {
      console.log("Not logged in");
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
    
}

// Middleware configuration
export const config = {
  matcher: ["/admin/:path*"], // Apply the middleware to all /admin routes
};
