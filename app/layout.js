import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "skeleton-elements/css";
import { Toaster } from "@/components/ui/sonner";

import ThemeProvider from "@/hooks/ThemeProvider";
import { Navbar } from "@/components/Nav/NavBar";
import { NavbarHeightProvider } from "@/hooks/NavbarHeightContext";
import HeaderProvider from "@/hooks/HeadersContexr";
import { Footer } from "@/components/footer";
import { Providers } from "./Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Shelf",
  description: "A platform for developers to share and discover resources",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scrollbar-thumb-purple-400 scrollbar-track-foreground scrollbar-thin"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Providers>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          <NavbarHeightProvider>
            <Navbar />
            <HeaderProvider>{children}</HeaderProvider>
          </NavbarHeightProvider>
          <Toaster />

          <Footer />
        </ThemeProvider>
          </Providers>
      </body>
    </html>
  );
}
