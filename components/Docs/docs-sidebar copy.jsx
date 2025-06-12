
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, Code, Box, Settings } from 'lucide-react';

export function DocsSidebar() {
  const pathname = usePathname();
  const sections = [
    {
      title: "Introduction",
      items: [
        { name: "Getting Started", href: "/docs/getting-started", icon: <FileText size={16} /> },
        { name: "Installation", href: "/docs/installation", icon: <Settings size={16} /> }
      ]
    },
    {
      title: "Development Resources",
      items: [
        { name: "Code Snippets", href: "/docs/snippets", icon: <Code size={16} /> },
        { name: "Boilerplates", href: "/docs/boilerplates", icon: <Box size={16} /> }
      ]
    }
  ];

  return (
    <nav className="space-y-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold mb-2">{section.title}</h3>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                    pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-accent/50'
                  }`}
                >
                  <span className="opacity-60">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}