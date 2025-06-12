// components/docs/docs-pager.jsx
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllDocs } from "@/lib/mdx-all";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export async function DocsPager({ currentSlug }) {
  const docs = getAllDocs();
  const currentIndex = docs.findIndex((doc) => doc.slug === currentSlug);
  const prev = docs[currentIndex - 1];
  const next = docs[currentIndex + 1];

  if (!prev && !next) return null;

  return (
    <div className="flex justify-between mt-16 pt-8 border-t">
      {prev ? (
        <Link
          href={`/${prev.slug}`}
          className="flex flex-col gap-2 items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <span>Previous:</span>
          <div className="flex gap-2 items-center">
            <ChevronLeft className="w-8 h-8" />
            <Tooltip>
              <TooltipTrigger>
                <span className="text-white text-xl">{prev.title}</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>{prev.description}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/${next.slug}`}
          className="flex flex-col gap-2 items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <span>Next:</span>
          <div className="flex gap-2 items-center">
            <Tooltip>
              <TooltipTrigger>
                <span className="text-white text-xl">{next.title}</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>{next.description}</p>
              </TooltipContent>
            </Tooltip>
            <ChevronRight className="w-8 h-8" />
          </div>
        </Link>
      ) : null}
    </div>
  );
}
