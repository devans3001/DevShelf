import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Lightbulb, AlertTriangle } from "lucide-react";
import { Alert,AlertTitle,AlertDescription } from "../ui/alert";
import { CodeBlock } from "./code-block";
// import CodeBlock from "./code-block";

// function CodeBlock({ language, title, children }) {
//   return (
//     <div className="my-4 border rounded-md overflow-hidden">
//       {title && (
//         <div className="px-4 py-2 bg-secondary text-sm font-medium">
//           {title}
//         </div>
//       )}
//       <pre className={`p-4 overflow-x-auto language-${language}`}>
//         <code>{children}</code>
//       </pre>
//     </div>
//   );
// }


// ProTip box
export function ProTip({ children }) {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-6 rounded-md">
      <div className="flex items-start gap-2 text-yellow-800 dark:text-yellow-100">
        <Lightbulb className="w-5 h-5 mt-1" />
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
        <AlertTriangle className="w-5 h-5 mt-1" />
        <div>{children}</div>
      </div>
    </div>
  );
}

export const CustomComponents = {
  h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
  p: (props) => <p className="my-4" {...props} />,
  a: (props) => (
    <Link href={props.href || "#"} className="text-blue-600 hover:underline" {...props} />
  ),
  img: (props) => (
    <Image
      src={props.src || "/placeholder.svg"}
      alt={props.alt || "Image"}
      width={600}
      height={400}
      className="my-6 rounded-lg"
    />
  ),
  pre: (props) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6" {...props} />
  ),
  CodeBlock: CodeBlock,
  Alert: Alert,
    AlertTitle: AlertTitle,
    AlertDescription: AlertDescription,
  ProTip: ProTip,
  CommonMistake: CommonMistake,
};
