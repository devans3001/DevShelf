"use client";
import Sidebar from "@/components/Docs/sidebar";
import ScrollspyPage from "@/components/Docs/Scrollspy";
import { useView } from "@/hooks/useView";
import ScrollToTop from "@/components/ScrollToTop";

export default function DocsLayout({ children }) {
  const { view, lg } = useView();

  // REMOVES the scrollspy on mobile devices
  // and adds it on larger screens
  const isScroll = view >= 1278;
  return (
    <div className="relative flex min-h-screen w-full">
      {lg && <Sidebar />}
      <main className={`flex-1`}>
        <div className={`max-w-3xl mx-auto pt-0 pb-4 px-4`}>{children}</div>
      </main>

      {isScroll && <ScrollspyPage />}
      {view < 640 && <ScrollToTop />}
    </div>
  );
}
