import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubSlugger from "github-slugger";
import {
  Library,
  Code2,
  Box,
  Search,
  Moon,
  Copy,
  RefreshCw,
  LinkIcon,
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import { CodeBlock } from "./code-block";

import { CommonMistake, ProTip } from "./boxs";
import { Callout, Card, CardGrid } from "./cards";
import TechTag from "./texh-tag";
import { cn } from "@/lib/utils";

const slugger = new GithubSlugger();

function Heading({ as: Tag, children, className = "" }) {
  const text = typeof children === "string" ? children : children?.toString?.();
 let rawId = slugger.slug(text);
let id = rawId.replace(/-\d+$/, "");

  return (
    <Tag id={id} className={`${className} scroll-mt-24`}>
      {children}
    </Tag>
  );
}
const H2 = ({ children, ...props }) => {
  const text = typeof children === "string" ? children : children?.toString?.();
  let rawId = slugger.slug(text);
  let id = rawId.replace(/-\d+$/, "");

  return (
    <h2
      id={id}
      className={cn(
        "group relative text-2xl font-bold mt-6 mb-3 scroll-mt-20",
        "hover:[&>a>svg]:opacity-100" // Only show icon on hover
      )}
      {...props}
    >
      {id ? (
        <a
          href={`#${id}`}
          className="no-underline hover:underline" // Optional: underline on hover
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


export const CustomComponents = {
  h1: (props) => (
    <Heading as="h1" className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: H2,
  h3: (props) => (
    <Heading as="h3" className="text-xl font-bold mt-4 mb-2" {...props} />
  ),
  p: (props) => <p className="my-4" {...props} />,
  ul: (props) => <ul className="my-4 list-outside list-disc" {...props} />,
  hr: (props) => <hr {...props} />,
  a: (props) => (
    <Link
      href={props.href || "#"}
      target="_blank"
      className="text-blue-600 hover:underline"
      {...props}
    />
  ),
  img: (props) => (
    <Image
      src={props.src || "/placeholder.svg"}
      alt={props.alt || "Image"}
      width={600}
      height={400}
      className="my-6 rounded-lg"
    />
  ),
  pre: (props) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6"
      {...props}
    />
  ),
  CodeBlock: CodeBlock,
  Alert: Alert,
  AlertTitle: AlertTitle,
  AlertDescription: AlertDescription,
  ProTip: ProTip,
  CommonMistake: CommonMistake,
  Button: Button,
  Callout: Callout,
  Card: Card,
  TechTag: TechTag,
  CardGrid: CardGrid,
  Library,
  Code2,
  Box: Box,
  Search,
  Moon,
  Copy,
  RefreshCw,
};
