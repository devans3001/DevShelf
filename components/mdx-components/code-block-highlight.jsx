
"use client"

import { useThemeDetector } from "@/hooks/useThemeDetector";
import { Highlight, themes } from "prism-react-renderer";
import React from 'react'

function CodeBlockHighlight({formattedCode,language}) {
      const { isDark } = useThemeDetector();
      const theme = isDark ? themes.shadesOfPurple : themes.vsDark;
  return (
     <Highlight theme={theme} code={formattedCode} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <div className="overflow-x-auto rounded-lg w-full">
                <pre
                  className={`${className} p-4 pl-6 text-xs sm:text-sm`}
                  style={{ ...style, overflowX: "auto" }}
                >
                  {tokens.map((line, i) => {
                    const { key, ...lineProps } = getLineProps({
                      line,
                      key: i,
                    });
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
  )
}

export default CodeBlockHighlight