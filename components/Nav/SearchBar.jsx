"use client";

import { useState, useEffect } from "react";
import { Search, Code, FileText, Settings, Github, Package, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { SearchTrigger } from "./SearchIcon";

// Mock search data - replace with your actual content
const docsSections = [
  { id: "snippets", name: "Code Snippets", icon: <Code className="w-4 h-4" /> },
  { id: "boilerplates", name: "Boilerplates", icon: <FileText className="w-4 h-4" /> },
  { id: "vscode", name: "VS Code Extensions", icon: <Zap className="w-4 h-4" /> },
  { id: "packages", name: "NPM Packages", icon: <Package className="w-4 h-4" /> },
];

const quickActions = [
  { id: "settings", name: "Settings", icon: <Settings className="w-4 h-4" />, shortcut: "⌘S" },
  { id: "github", name: "GitHub Repo", icon: <Github className="w-4 h-4" />, shortcut: "⌘G" },
];

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Toggle with CMD+K
  useEffect(() => {
    const down = (e) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredDocs = docsSections.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id) => {
    setOpen(false);
    router.push(`/docs/${id}`);
  };

  return (
    <>
      <SearchTrigger onClick={() => setOpen(true)} />

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search documentation, snippets, or packages..." 
          value={query}
          onValueChange={setQuery}
        />
        <CommandList className="max-h-[70vh]">
          <CommandEmpty>No results found. Try a different search term.</CommandEmpty>

          {filteredDocs.length > 0 && (
            <CommandGroup heading="Documentation">
              {filteredDocs.map((item) => (
                <CommandItem 
                  key={item.id}
                  value={item.id}
                  onSelect={() => handleSelect(item.id)}
                >
                  <div className="mr-2">{item.icon}</div>
                  <span>{item.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          <CommandSeparator />

          <CommandGroup heading="Quick Actions">
            {quickActions.map((action) => (
              <CommandItem key={action.id}>
                <div className="mr-2">{action.icon}</div>
                <span>{action.name}</span>
                {action.shortcut && (
                  <CommandShortcut>{action.shortcut}</CommandShortcut>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>

        {/* Footer */}
        <div className="p-2 text-xs text-muted-foreground border-t flex items-center justify-between">
          <span>DevShelf v1.0</span>
          <span className="flex items-center gap-2">
            <kbd className="bg-muted px-1.5 py-0.5 rounded">↑↓</kbd> Navigate
            <kbd className="bg-muted px-1.5 py-0.5 rounded">↵</kbd> Select
          </span>
        </div>
      </CommandDialog>
    </>
  );
}