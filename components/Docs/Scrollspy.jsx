"use client";

import React from "react";
import ScrollSpy from "./docs-scrollspy";
import { useNavbarHeight } from "@/hooks/NavbarHeightContext";

function ScrollspyPage() {
  const { navbarHeight } = useNavbarHeight();

  return (
    <aside
      className="sticky right-0 w-80 p-6 overflow-y-auto"
      style={{
        top: `${navbarHeight}px`,
        height: `calc(100dvh - ${navbarHeight}px)`,
      }}
    >
      <ScrollSpy />
    </aside>
  );
}

export default ScrollspyPage;
