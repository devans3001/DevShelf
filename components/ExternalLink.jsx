import { TiLocationArrow } from "react-icons/ti";
import React from "react";
import Link from "next/link";

function ExternalLink({ props, children,className }) {
  return (
    <Link
      href={props?.href || "#"}
      target="_blank"
      className={`text-blue-600 hover:underline`}
      {...props}
    >
      <span className="flex gap-1">
        {children}
        <TiLocationArrow className="" />
      </span>
    </Link>
  );
}

export default ExternalLink;
