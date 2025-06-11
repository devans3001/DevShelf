"use client";
import { DocsSidebar } from "@/components/docs-sidebar";
import { DocsPager } from "@/components/docs-pager";
import { useNavbarHeight } from "@/hooks/NavbarHeightContext";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DocsLayout({ children }) {
  const { navbarHeight } = useNavbarHeight();

  return (
    <div
      className="flex min-h-screen w-full"
      //   style={{ paddingTop: `${navbarHeight}px` }}
    >
      {/* Left Sidebar */}
      <aside
        className="fixed left-0 w-64 border-r overflow-y-auto"
        style={{
          top: `${navbarHeight}px`,
          height: `calc(100dvh - ${navbarHeight}px)`,
        }}
      >
         <ScrollArea
        className="pr-3 p-4"
        style={{
          height: `calc(100vh - ${navbarHeight}px - 1rem)`,
        }}
      >

        <div className="mb-6">
          <h1 className="text-xl font-bold">DevShelf Docs</h1>
          <p className="text-sm text-muted-foreground">v1.0.0</p>
        </div>
        <DocsSidebar />
      </ScrollArea>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-64 pr-80">
        <div className="max-w-3xl mx-auto py-8 px-4">
          {children}
          <DocsPager />
        </div>
      </main>

      {/* Right Table of Contents */}
      <aside
        className="fixed right-0 w-80 border-l p-4 overflow-y-auto"
        style={{
          top: `${navbarHeight}px`,
          height: `calc(100dvh - ${navbarHeight}px)`,
        }}
      >
        <h2 className="text-sm font-semibold mb-4">On this page</h2>
        {/* TOC will be populated dynamically */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </aside>
    </div>
  );
}
