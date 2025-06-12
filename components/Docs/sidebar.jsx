"use client";

import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { DocsSidebar } from "./docs-sidebar";
import { useNavbarHeight } from "@/hooks/NavbarHeightContext";

function Sidebar() {
  const { navbarHeight } = useNavbarHeight();
  return (
    <aside
      className="fixed left-0 w-64 overflow-y-auto"
      style={{
        top: `${navbarHeight}px`,
        height: `calc(100dvh - ${navbarHeight}px)`,
      }}
    >
      <ScrollArea
        className="pr-3 p-4"
        style={{
          height: `calc(100vh - ${navbarHeight}px - 1rem)`,
        }}
      >
        <div className="mb-6">
          <h1 className="text-xl font-bold">DevShelf Docs</h1>
          <p className="text-sm text-muted-foreground">v1.0.0</p>
        </div>
        <DocsSidebar />
      </ScrollArea>
    </aside>
  );
}

export default Sidebar;
