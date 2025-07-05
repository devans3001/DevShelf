import React from "react";
import Image from "next/image";
import {
  Library,
  Code2,
  Box,
  Search,
  Moon,
  Copy,
  RefreshCw,
  Zap, Cpu, AlertTriangle,
  Paintbrush, GitBranch,
  Package, Scale, Calendar, Clock, FormInput,Rocket,Bug
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import { CodeBlock } from "./code-block";

import { CommonMistake, FileStructure, ProTip } from "./boxs";
import { Callout, Card, CardGrid } from "./cards";
import TechTag from "./texh-tag";
import { H2, Heading } from "./Headers";
import ExternalLink from "../ExternalLink";
import NextjsTable from "./NextjsTable";
import ReduxTable from "./ReduxTable";
import { ExtensionCard } from "./Extension";
import { ImageComp } from "./ImageComp";




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
  <ExternalLink {...props}/>
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
  FileStructure,
  NextjsTable,
  Library,
  Code2,
  Box: Box,
  Search,
  Moon,
  Copy,
  RefreshCw,
  Zap, Cpu, AlertTriangle,Paintbrush, GitBranch, Package, Scale,ReduxTable,Calendar, Clock, FormInput,Rocket,Bug,ExtensionCard,ImageComp
};
