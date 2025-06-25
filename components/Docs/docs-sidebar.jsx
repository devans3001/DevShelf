"use client";

import {
  FileText,
  Code,
  Box,
  Settings,
  Code2,
  Package,
  Gauge,
  TestTube2,
  FileSearch,
  Bug,
  Library,
} from "lucide-react";
import DocSidebarLogic from "./doc-sidebar-logic";

export const sections = [
  {
    title: "Introduction",
    items: [
      {
        name: "Getting Started",
        href: "/docs/getting-started",
        icon: <FileText size={16} />,
      },
      {
        name: "Installation",
        href: "/docs/installation",
        icon: <Settings size={16} />,
      },
    ],
  },
  {
    title: "Development Resources",
    items: [
      {
        name: "Libraries & Frameworks",
        href: "/docs/libs",
        icon: <Library size={16} />,
        subItems: "libraries",
      },
      {
        name: "Code Snippets",
        href: "/docs/snippets",
        icon: <Code size={16} />,
        // subItems: "snippets",
      },
      {
        name: "Boilerplates",
        href: "/docs/boilerplates",
        icon: <Box size={16} />,
        // subItems: "boilerplates",
      },
      {
        name: "VS Code Setup",
        href: "/docs/vscode",
        icon: <Code2 size={16} />,
        // subItems: "vscode",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Essential Packages",
        href: "/docs/packages",
        icon: <Package size={16} />,
      },
      {
        name: "Performance Tools",
        href: "/docs/performance",
        icon: <Gauge size={16} />,
      },
      {
        name: "Testing",
        href: "/docs/testing",
        icon: <TestTube2 size={16} />,
        // subItems: "testing",
      },
    ],
  },
  {
    title: "References",
    items: [
      {
        name: "API Reference",
        href: "/docs/api",
        icon: <FileSearch size={16} />,
      },
      {
        name: "Cheat Sheets",
        href: "/docs/cheatsheets",
        icon: <FileText size={16} />,
      },
      {
        name: "Troubleshooting",
        href: "/docs/troubleshooting",
        icon: <Bug size={16} />,
      },
    ],
  },
];

export function DocsSidebar() {
  return (
    <nav className="space-y-8">
      <DocSidebarLogic />
    </nav>
  );
}
