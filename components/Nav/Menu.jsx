"use client";

import { Hamburger } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { usePathname } from "next/navigation";
import { routes } from "./Routes";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import DocSidebarLogic from "../Docs/doc-sidebar-logic";
import SocialFooter from "./SocialFooter";

function MenuBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden cursor-pointer">
        <Hamburger size={30} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="border-l border-purple-300 flex flex-col justify-between"
      >
        <SheetHeader className={"h-[10%] sm:h-[15%]"}>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
        </SheetHeader>
        <div className="h-[80%] sm:h-[70%]">
          <ScrollArea className={"h-full px-4"}>
           <div className="space-y-4">

            <nav className="">
              <SheetTitle>
                Menu
              </SheetTitle>
              <ul className="space-y-1 p-4 text-foreground">
                {routes.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="block p-2 hover:bg-accent rounded"
                      // Manually trigger close on click
                      // onClick={() => setOpen(false)}
                    >
                      <SheetClose>{link.name}</SheetClose>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <DocSidebarLogic/>
           </div>

          </ScrollArea>
        </div>

        {/* <SheetFooter>lol</SheetFooter> */}
        <SocialFooter/>
      </SheetContent>
    </Sheet>
  );
}

export default MenuBar;



