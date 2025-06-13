"use client";

import React, { useState, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import pluginEstree from "prettier/plugins/estree";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { useThemeDetector } from "@/hooks/useThemeDetector";
import { useView } from "@/hooks/useView";

export function CodeBlock({ children, language = "jsx" }) {
  const [copied, setCopied] = useState(false);
  const [formattedCode, setFormattedCode] = useState("");
  const { md } = useView();
  const { isDark } = useThemeDetector();
  const theme = isDark ? themes.shadesOfPurple : themes.vsDark;

  useEffect(() => {
    async function formatCode() {
      try {
        const result = await prettier.format(children.trim(), {
          proseWrap: "always",
          parser: "babel",
          plugins: [parserBabel, pluginEstree],
          semi: true,
          singleQuote: false,
          printWidth: !md ? 60 : 80,
        });
        setFormattedCode(result);
      } catch (err) {
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
      // Fallback for browsers that don't support clipboard API
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

      {formattedCode && (
        <Highlight theme={theme} code={formattedCode} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <div className="overflow-x-auto rounded-lg w-full">
              <pre
                className={`${className} p-4 pl-6 text-xs sm:text-sm`}
                style={{ ...style, overflowX: "auto" }}
              >
                {tokens.map((line, i) => {
                  const { key, ...lineProps } = getLineProps({ line, key: i });
                  return (
                    <div key={key} {...lineProps} className="table-row">
                      <span className="table-cell pr-4 select-none text-right text-gray-500">
                        {i + 1}
                      </span>
                      <span className="table-cell whitespace-pre-wrap">
                        {line.map((token, j) => {
                          const { key, ...tokenProps } = getTokenProps({
                            token,
                            key: j,
                          });
                          return <span key={key} {...tokenProps} />;
                        })}
                      </span>
                    </div>
                  );
                })}
              </pre>
            </div>
          )}
        </Highlight>
      )}
    </div>
  );
}
