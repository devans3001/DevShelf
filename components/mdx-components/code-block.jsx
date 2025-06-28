"use client";

import React, { useState, useEffect, useTransition } from "react";
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import parserMarkdown from "prettier/plugins/markdown";
import pluginEstree from "prettier/plugins/estree";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { useView } from "@/hooks/useView";
import CodeBlockHighlight from "./code-block-highlight";
import CodeBlockSkeleton from "./code-block-skeleton";

export function CodeBlock({ children, language = "jsx" }) {
  const [copied, setCopied] = useState(false);
  const [formattedCode, setFormattedCode] = useState("");
  const [isPending, startTransition] = useTransition();
  const { md } = useView();

  useEffect(() => {
    async function formatCode() {
      try {
        // startTransition(async () => {
          let parser = "babel";
          let plugins = [pluginEstree, parserBabel];

          switch (language) {
            case "markdown":
            case "md":
              parser = "markdown";
              plugins = [pluginEstree, parserMarkdown];
              break;
            default:
              parser = "babel";
              plugins = [pluginEstree, parserBabel];
          }
          const result = await prettier.format(children.trim(), {
            proseWrap: "always",
            parser,
            plugins,
            semi: true,
            singleQuote: false,
            printWidth: !md ? 60 : 80,
          });
           startTransition(() => setFormattedCode(result)); 
        // });
      } catch (err) {
        console.log("some code block error")
        console.error("Prettier format error:", err);
        setFormattedCode(children.trim());
      }
    }

    formatCode();
  }, [children, md]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children.trim());
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = children.trim();
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        toast.success("Copied to clipboard!");
      } catch (err) {
        toast.error("Failed to copy!");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="relative my-6 w-full max-w-full overflow-hidden group">
      {/* {filename && !isPending && (
        <div className="bg-muted text-muted-background text-xs px-4 py-2 font-mono border-b border-border rounded-t-lg">
          {filename}
        </div>
      )} */}
      <button
        onClick={handleCopy}
        className={`absolute top-3 right-3 z-10 bg-black/80 text-white p-1.5 rounded-md hover:bg-black/90 transition ${
          !md ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400 transition-transform duration-200 scale-110" />
        ) : (
          <Copy className="w-4 h-4 cursor-pointer" />
        )}
      </button>
      {isPending ? (
        <CodeBlockSkeleton />
      ) : (
        formattedCode && (
          <CodeBlockHighlight
            formattedCode={formattedCode}
            language={language}
          />
        )
      )}
    </div>
  );
}
