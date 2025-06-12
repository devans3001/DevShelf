"use client";

import React from "react";
import ScrollSpy from "./docs-scrollspy";
import { useNavbarHeight } from "@/hooks/NavbarHeightContext";
import { useView } from "@/hooks/useView";

function ScrollspyPage() {
  const { navbarHeight } = useNavbarHeight();
  const { view } = useView();

  if (view <= 1278) return null;
  return (
    <aside
      className="fixed right-0 w-80 p-6 overflow-y-auto"
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
