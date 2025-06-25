"use client";
import Sidebar from "@/components/Docs/sidebar";
import ScrollspyPage from "@/components/Docs/Scrollspy";
import { useView } from "@/hooks/useView";

export default function DocsLayout({ children }) {
  const { view,lg } = useView();

  // REMOVES the scrollspy on mobile devices
  // and adds it on larger screens
  const isScroll = view >= 1278;
  return (
    <div className="flex min-h-screen w-full">
      {lg && <Sidebar />}
      <main className={`flex-1`}>
        <div className={`max-w-3xl mx-auto pt-0 pb-8 px-4`}>{children}</div>
      </main>

      {isScroll && <ScrollspyPage />}
    </div>
  );
}
