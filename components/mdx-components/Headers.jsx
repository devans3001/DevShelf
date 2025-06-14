"use client"
import { cn } from "@/lib/utils";
import GithubSlugger from "github-slugger";
import { LinkIcon } from "lucide-react";

const slugger = new GithubSlugger();


export function Heading({ as: Tag, children, className = "" }) {
  const text = typeof children === "string" ? children : children?.toString?.();
 let rawId = slugger.slug(text);
let id = rawId.replace(/-\d+$/, "");

  return (
    <Tag id={id} className={`${className} scroll-mt-24`}>
      {children}
    </Tag>
  );
}
export const H2 = ({ children, ...props }) => {
  const text = typeof children === "string" ? children : children?.toString?.();
  let rawId = slugger.slug(text);
  let id = rawId.replace(/-\d+$/, "");

  return (
    <h2
      id={id}
      className={cn(
        "group relative text-2xl font-bold mt-6 mb-3 scroll-mt-20",
        "hover:[&>a>svg]:opacity-100" 
      )}
      {...props}
    >
      {id ? (
        <a
          href={`#${id}`}
          className="no-underline hover:underline" 
        >
          <p className="relative flex items-center gap-1.5">
            <span>

            {children}
            </span>
            <LinkIcon
              className={cn(
                // "absolute -left-6 top-1/2 -translate-y-1/2 w-5 h-5",
                "opacity-0 transition-opacity duration-200 w-5 h-5",
                "text-muted-foreground hover:text-primary",
                "group-hover:opacity-100 focus:opacity-100 focus:outline-none"
              )}
              aria-hidden="true"
            />

          </p>
        </a>
      ) : (
        children
      )}
    </h2>
  );
};