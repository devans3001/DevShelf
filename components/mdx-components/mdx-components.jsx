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
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import { CodeBlock } from "./code-block";

import { CommonMistake, ProTip } from "./boxs";
import { Callout, Card, CardGrid } from "./cards";
import TechTag from "./texh-tag";

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


export const CustomComponents = {
  h1: (props) => (
    <Heading as="h1" className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props) => (
    <Heading as="h2" className="text-2xl font-bold mt-6 mb-3" {...props} />
  ),
  h3: (props) => (
    <Heading as="h3" className="text-xl font-bold mt-4 mb-2" {...props} />
  ),
  p: (props) => <p className="my-4" {...props} />,
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
