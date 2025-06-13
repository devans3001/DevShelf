"use client";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";
import { sections } from "./docs-sidebar";

function DocSidebarLogic() {
      const pathname = usePathname();
  return (
    <>
      {sections?.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold mb-2">{section.title}</h3>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.name}>
                {item.subItems ? (
                  <Collapsible>
                    <CollapsibleTrigger
                      className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded-md transition-colors ${
                        pathname.startsWith(item.href)
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-accent/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="opacity-60">{item.icon}</span>
                        {item.name}
                      </div>
                      <ChevronDown className="w-4 h-4 opacity-60 transition-transform duration-200 collapsible-trigger-icon" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-6 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
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
                  </Collapsible>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-accent/50"
                    }`}
                  >
                    <span className="opacity-60">{item.icon}</span>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default DocSidebarLogic;
