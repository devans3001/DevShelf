"use client";
import Sidebar from "@/components/Docs/sidebar";
import ScrollspyPage from "@/components/Docs/Scrollspy";
import { useView } from "@/hooks/useView";

export default function DocsLayout({ children }) {
  const { view,lg } = useView();

  const isScroll = view >= 1278;
  return (
    <div className="flex min-h-screen w-full">
      {lg && <Sidebar />}

      <main className={`flex-1 ${lg ?"pl-64":""} ${isScroll ?"pr-80":""}`}>
        <div className={`max-w-3xl mx-auto py-8 px-4`}>{children}</div>
      </main>

      {isScroll && <ScrollspyPage />}
    </div>
  );
}
