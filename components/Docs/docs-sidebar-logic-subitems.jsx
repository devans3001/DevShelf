"use client";

import React, { useEffect } from "react";
import { CollapsibleContent } from "@/components/ui/collapsible";
import Link from "next/link";

function DocsSidebarLogicSubitems({ cat, pathname, startTransition }) {
  const [docs, setDocs] = React.useState([]);

  useEffect(() => {
    async function fetchDocs() {
      try {
        const res = await fetch(`/api/docs/${cat}`);
        const data = await res.json();
        startTransition(() => {
          setDocs(data);
        });
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchDocs();
  }, [cat]);
  return (
    <>
      <CollapsibleContent className="ml-6 mt-1 space-y-1">
        {docs.map((subItem) => (
          <Link
            key={subItem.name}
            href={subItem.href}
            className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
              pathname === subItem.href
                ? "bg-primary/10 text-primary"
                : "hover:bg-accent/50"
            }`}
          >
            <span className="opacity-60">•</span>
            {subItem.name}
          </Link>
        ))}
      </CollapsibleContent>
    </>
  );
}

export default DocsSidebarLogicSubitems;
