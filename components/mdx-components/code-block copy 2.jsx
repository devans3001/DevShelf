"use client";

import React, { useState, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import pluginEstree from "prettier/plugins/estree";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

export function CodeBlock({ children, language = "jsx" }) {
  const [copied, setCopied] = useState(false);
  const [formattedCode, setFormattedCode] = useState("");

  useEffect(() => {
    async function formatCode() {
      try {
        const result = await prettier.format(children.trim(), {
          parser: "babel",
          plugins: [parserBabel, pluginEstree],
          semi: false,
          singleQuote: true,
        });
        setFormattedCode(result);
      } catch (err) {
        console.error("Prettier format error:", err);
        setFormattedCode(children.trim()); // fallback
      }
    }

    formatCode();
  }, [children]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children.trim());
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };

  return (
    <div className="relative my-6 overflow-x-hidden">
      <div className="group">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 z-10 bg-black/80 text-white p-1.5 rounded-md hover:bg-black/90 transition opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400 transition-transform duration-200 scale-110" />
          ) : (
            <Copy className="w-4 h-4 cursor-pointer" />
          )}
        </button>

        {formattedCode && (
          <Highlight
            theme={themes.shadesOfPurple}
            code={formattedCode}
            language={language}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={`${className} overflow-x-auto max-w-full rounded-lg text-sm p-4 pl-6`}
                style={style}
              >
                {tokens.map((line, i) => {
                  const { key, ...lineProps } = getLineProps({ line, key: i });
                  return (
                    <code key={key} {...lineProps} className="table-row">
                      <span className="table-cell pr-4 select-none text-right text-gray-500">
                        {i + 1}
                      </span>
                      <span className="table-cell">
                        {line.map((token, j) => {
                          const { key, ...tokenProps } = getTokenProps({
                            token,
                            key: j,
                          });
                          return <span key={key} {...tokenProps} />;
                        })}
                      </span>
                    </code>
                  );
                })}
              </pre>
            )}
          </Highlight>
        )}
      </div>
    </div>
  );
}
