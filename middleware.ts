import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Liste des routes qui nécessitent une authentification
const protectedRoutes = [
  "/dashboard",
  "/dashboard/challenges",
  "/dashboard/create-challenge",
  "/dashboard/simulators",
  "/dashboard/guides",
  "/dashboard/community",
  "/dashboard/leaderboard",
  "/dashboard/notifications",
  "/dashboard/profile",
  "/dashboard/settings",
]

// Liste des routes publiques pour les utilisateurs déjà authentifiés
const authRoutes = ["/login", "/register", "/forgot-password"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Simuler la vérification d'authentification
  // Dans une application réelle, vous vérifieriez un cookie ou un token JWT
  const isAuthenticated = request.cookies.has("auth") || process.env.NODE_ENV === "development"

  // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
  // et essaie d'accéder à une route protégée
  if (!isAuthenticated && protectedRoutes.some((route) => pathname.startsWith(route))) {
    const url = new URL("/login", request.url)
    url.searchParams.set("from", pathname)
    return NextResponse.redirect(url)
  }

  // Rediriger vers le tableau de bord si l'utilisateur est déjà authentifié
  // et essaie d'accéder à une route d'authentification
  if (isAuthenticated && authRoutes.some((route) => pathname === route)) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     * - api routes
     */
    "/((?!_next/static|_next/image|favicon.ico|public|api).*)",
  ],
}

