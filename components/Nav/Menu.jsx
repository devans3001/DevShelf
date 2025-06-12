"use client";

import { Hamburger } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { usePathname } from "next/navigation";
import { routes } from "./Routes";
import Link from "next/link";

function MenuBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden cursor-pointer">
        <Hamburger size={30}/>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[50dvh]">
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <nav>
          <ul className="space-y-1 p-4 text-foreground">
            {routes.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.path}
                  className="block px-4 py-2 hover:bg-accent rounded"
                  // Manually trigger close on click
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MenuBar;
