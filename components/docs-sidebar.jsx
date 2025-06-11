"use client";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown, Library } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";

export function DocsSidebar() {
  const pathname = usePathname();
  const sections = [
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

  return (
    <nav className="space-y-8">
     
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.name}>
                  {item.subItems ? (
                    <Collapsible>
                      <CollapsibleTrigger
                        className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded-md transition-colors ${
                          pathname.startsWith(item.href)
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent/50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="opacity-60">{item.icon}</span>
                          {item.name}
                        </div>
                        <ChevronDown className="w-4 h-4 opacity-60 transition-transform duration-200 collapsible-trigger-icon" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-6 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                              pathname === subItem.href
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-accent/50"
                            }`}
                          >
                            <span className="opacity-60">•</span>
                            {subItem.name}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                        pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-accent/50"
                      }`}
                    >
                      <span className="opacity-60">{item.icon}</span>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </nav>
  );
}
