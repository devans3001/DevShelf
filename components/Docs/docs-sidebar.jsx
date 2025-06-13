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
        subItems: [
          { name: "React Hooks", href: "/docs/libraries/react-hooks" },
        ],
      },
      {
        name: "Code Snippets",
        href: "/docs/snippets",
        icon: <Code size={16} />,
        subItems: [
          { name: "React Hooks", href: "/docs/snippets/react-hooks" },
          { name: "Utility Functions", href: "/docs/snippets/utilities" },
          { name: "CSS Tricks", href: "/docs/snippets/css" },
        ],
      },
      {
        name: "Boilerplates",
        href: "/docs/boilerplates",
        icon: <Box size={16} />,
        subItems: [
          { name: "Next.js Starter", href: "/docs/boilerplates/nextjs" },
          { name: "API Routes", href: "/docs/boilerplates/api-routes" },
          { name: "Authentication", href: "/docs/boilerplates/auth" },
        ],
      },
      {
        name: "VS Code Setup",
        href: "/docs/vscode",
        icon: <Code2 size={16} />,
        subItems: [
          { name: "Recommended Extensions", href: "/docs/vscode/extensions" },
          { name: "Settings.json", href: "/docs/vscode/settings" },
          { name: "Keybindings", href: "/docs/vscode/keybindings" },
        ],
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
        subItems: [
          { name: "Unit Testing", href: "/docs/testing/unit" },
          { name: "E2E Testing", href: "/docs/testing/e2e" },
        ],
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
