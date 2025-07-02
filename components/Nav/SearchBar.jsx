"use client";

//found out that what might have cause the issue was using useTransition in this component
import { useState, useEffect, useMemo, useTransition } from "react";
import {
  Search,
  Code,
  FileText,
  Settings,
  Github,
  Package,
  Zap,
} from "lucide-react";
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
import Fuse from "fuse.js";

// ADD USETRANSITION FOR THE ALLMDX DOCS ..... this info is so wrong, the cause of my annoying error
// dont use useTransition inside a useEffect
const docsSections = [
  {
    id: "docs",
    title: "Welcome to DevShelf Docs",
    icon: <Code className="w-4 h-4" />,
    slug: "docs",
  },
  {
    id: "boilerplates",
    title: "Boilerplates",
    icon: <FileText className="w-4 h-4" />,
    slug: "docs/boilerplates",
  },
  {
    id: "vscode",
    title: "Essential VS Code Extensions",
    icon: <Zap className="w-4 h-4" />,
    slug: "docs/vs-code",
  },
  {
    id: "testing",
    title: "Testing in Modern Frontend Apps",
    icon: <Package className="w-4 h-4" />,
    slug: "docs/testing",
  },
];

const quickActions = [
  {
    id: "settings",
    name: "Settings",
    icon: <Settings className="w-4 h-4" />,
    shortcut: "⌘S",
  },
  {
    id: "github",
    name: "GitHub Repo",
    icon: <Github className="w-4 h-4" />,
    shortcut: "⌘G",
  },
];

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [docs, setDocs] = useState([]);
  const [isLoading, startTransition] = useTransition(null);
  const [results, setResults] = useState([]);
  const router = useRouter();

  // console.log(isLoading)

  useEffect(() => {
    startTransition(() => {
      fetch("/api/search/mdx")
        .then((res) => res.json())
        .then(setDocs);
    });
  }, []);

  // Initialize Fuse only once when docs load
  const fuse = useMemo(() => {
    return new Fuse(docs, {
      keys: [
        { name: "title", weight: 0.8 },
        { name: "keywords", weight: 1 },
        { name: "slug", weight: 1 },
        // { name: "content", weight: 3 },
        { name: "headings.text", weight: 0.5 },
      ],
      includeScore: true,
      threshold: 0.6,
      minMatchCharLength: 2,
      ignoreLocation: true,
    });
  }, [docs]);

  // console.log("fuse",fuse)

  useEffect(() => {
    if (query.trim() === "") {
      setResults([...docsSections]);
    } else {
      // const searchResults = fuse.search(query);
      const searchResults = fuse.search(query).map(({ item }) => item);
      setResults(searchResults);
    }
  }, [query]);
  console.log(" result", results);

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

  // if (isLoading) return <p>loading</p>;

  const handleSelect = (id) => {
    setOpen(false);
    const selected = docs.find((doc) => doc.title === id);
    console.log("selectd", selected);
    if (selected) router.push(`/${selected.slug}`);
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
          {/* <CommandEmpty>
            No results found. Try a different search term.
          </CommandEmpty> */}

          {
            <CommandGroup heading="Documentation" forceMount={true}>
              {results?.map((item) => (
                <CommandItem
                  key={item.id}
                  forceMount={true} // this added more search content
                  value={item.title}
                  onSelect={() => handleSelect(item.title)}
                >
                  <div className="mr-2">
                    {" "}
                    {item.icon || <FileText className="w-4 h-4" />}
                  </div>
                  <span>{item.title}</span>
                  {/* Headings Preview */}
                  {item.headings?.length > 0 && (
                    <div className="ml-6 mt-1 text-xs text-muted-foreground line-clamp-3">
                      {item.headings.map((h) => h.text).join(" • ")}
                    </div>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          }

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
