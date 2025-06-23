import { AlertTriangle, Lightbulb } from "lucide-react";

// ProTip box
export function ProTip({ children }) {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-6 rounded-md ">
      <div className="flex items-start gap-2 text-yellow-800 dark:text-yellow-100">
        <Lightbulb className="w-5 h-5 mt-1 flex-shrink-0" />
        <div>{children}</div>
      </div>
    </div>
  );
}

// CommonMistake box
export function CommonMistake({ children }) {
  return (
    <div className="bg-red-100 dark:bg-red-900/20 border-l-4 border-red-400 p-4 my-6 rounded-md">
      <div className="flex items-start gap-2 text-red-800 dark:text-red-100">
        <AlertTriangle className="w-5 h-5 mt-1 flex-shrink-0" />
        <div>{children}</div>
      </div>
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
