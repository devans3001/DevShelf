import { TiLocationArrow } from "react-icons/ti";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; 

function ExternalLink({ children, className, href, ...props }) {
  return (
    <Link
      href={href || "#"}
      target="_blank"
      className={cn(
        !className && "text-blue-600 hover:underline", 
        className
      )}
      {...props}
    >
      <span className="inline-flex gap-1">
        {children}
        {href?.startsWith("http") && <TiLocationArrow className="" />}
      </span>
    </Link>
  );
}

export default ExternalLink;