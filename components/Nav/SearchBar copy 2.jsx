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

  // Filter results based on query
  const filteredDocs = docsSections.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id) => {
    setOpen(false);
    router.push(`/docs/${id}`);
  };

  return (
    <>
      {/* Search Trigger */}
      <div
        className="flex items-center gap-2 border px-4 py-2 rounded-full cursor-pointer bg-white/80 dark:bg-zinc-800/80 hover:bg-white dark:hover:bg-zinc-700 transition-all duration-200 shadow-sm hover:shadow-md w-full max-w-md"
        onClick={() => setOpen(true)}
      >
        <Search className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground flex-1">Search docs...</span>
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-xs font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      {/* Command Menu */}
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