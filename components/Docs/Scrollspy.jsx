"use client";

import React from "react";
import ScrollSpy from "./docs-scrollspy";
import { useNavbarHeight } from "@/hooks/NavbarHeightContext";
import { ScrollArea } from "../ui/scroll-area";

function ScrollspyPage() {
  const { navbarHeight } = useNavbarHeight();

  return (
    <aside
      className="sticky right-0 w-80 px-6 overflow-y-auto"
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
        <ScrollSpy />
      </ScrollArea>
    </aside>
  );
}

export default ScrollspyPage;
