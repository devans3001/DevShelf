"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useHeaders } from "@/hooks/HeadersContexr";

export default function ScrollSpy({}) {
  const [activeId, setActiveId] = useState(null);

  const pathname = usePathname();
  const { headers: headings } = useHeaders();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0.1 }
    );

    const elements = headings
      ?.map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [pathname, headings]);

  console.log(headings)

  if (!headings.length) {
    return (
      <div className="space-y-2">
        <h2 className="text-sm font-semibold mb-4">On this page</h2>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div >
      <h2 className="text-sm font-semibold">On this page</h2>
      <ul className="space-y-3 text-sm mt-5">
        {headings?.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "block transition-colors hover:text-primary",
                level === 3 && "pl-4",
                activeId === id
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
