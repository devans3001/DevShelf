"use client";
import { cn } from "@/lib/utils";


export function ComparisonTable({ children, className }) {
  const features = [
    {
      title: "Client Component",
      points: [
        "Rendered on the client/browser",
        "Can use state (`useState`), effects (`useEffect`), and refs",
        "Can access `window`, `localStorage`, and other browser APIs",
        "Useful for interactive UI (modals, dropdowns, form validation)",
      ],
      badge: "use client",
      type: "client",
    },
    {
      title: "Server Component",
      points: [
        "Rendered on the server (Node.js)",
        "Cannot use state, effects, or refs",
        "Cannot access browser-only APIs like `window`",
        "Great for fetching data securely and reducing bundle size",
      ],
      badge: "default",
      type: "server",
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg border dark:border-zinc-800 p-4 bg-muted/30",
        className
      )}
    >
      {features.map((feat, idx) => (
        <div key={idx} className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">{feat.title}</h3>
            {feat.badge === "use client" ? (
              <span className="text-xs rounded bg-yellow-500/20 text-yellow-800 px-2 py-0.5">
                {feat.badge}
              </span>
            ) : (
              <span className="text-xs rounded bg-blue-500/20 text-blue-800 px-2 py-0.5">
                Server by default
              </span>
            )}
          </div>
          <ul className="text-sm list-disc list-inside space-y-1 text-muted-foreground">
            {feat.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function FileStructure({ children }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md font-mono text-sm my-6">
      <pre className="whitespace-pre-wrap">{children}</pre>
    </div>
  );
}
