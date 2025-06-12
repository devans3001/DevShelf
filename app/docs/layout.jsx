import { DocsPager } from "@/components/Docs/docs-pager";
import Sidebar from "@/components/Docs/sidebar";
import ScrollspyPage from "@/components/Docs/Scrollspy";

export default async function DocsLayout({ children, params }) {

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Sidebar */}
      <Sidebar />

      <main className="flex-1 pl-64 pr-80">
        <div className="max-w-3xl mx-auto py-8 px-4">
          {children}
          {/* <DocsPager /> */}
        </div>
      </main>

      {/* Right Table of Contents */}
      <ScrollspyPage />
    </div>
  );
}
