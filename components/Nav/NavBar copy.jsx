"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ThemeMode";
import Logo from "@/assets/logo";
import { useTheme } from "next-themes";
import SearchBar from "./SearchBar";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white dark:bg-background">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight flex items-center gap-1"
          >
            <Logo /> <p>DevShelf</p>
          </Link>
          {/* <Logo /> */}
          {pathname !== "/docs" && (
            <Link href="/docs">
              <Button variant="outline" className="text-sm">
                Explore Docs
              </Button>
            </Link>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <SearchBar />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
