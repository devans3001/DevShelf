// app/error.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw, Bug, Terminal } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}) {
  const pathname = usePathname();
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-gradient-to-b from-background to-destructive/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto"
      >
        <div className="relative mb-8">
          <AlertTriangle className="w-24 h-24 text-destructive mx-auto" />
          <Bug className="absolute -right-4 -bottom-4 w-10 h-10 text-foreground bg-background rounded-md p-1 border" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Unexpected Error Occurred
        </h1>

        <div className="bg-secondary/50 p-4 rounded-lg mb-6 font-mono text-sm text-left overflow-x-auto">
          <p className="text-muted-foreground mb-2">Error details:</p>
          <code className="text-destructive break-all">{error.message}</code>
          {error.digest && (
            <>
              <p className="text-muted-foreground mt-2 mb-1">Error digest:</p>
              <code className="text-foreground break-all">{error.digest}</code>
            </>
          )}
        </div>

        <p className="text-muted-foreground mb-6">
          An unexpected error occurred while processing your request.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => reset()}
            variant="default"
            className="gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>

          <Button asChild variant="secondary" className="gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Return Home
            </Link>
          </Button>
        </div>

        {isDev && (
          <div className="mt-8 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
            <h3 className="text-sm font-medium text-destructive mb-2">
              Development Hint
            </h3>
            <p className="text-xs text-destructive/80">
              Check the browser console for more details. This error occurred at:
            </p>
            <code className="text-xs mt-1 text-destructive/80 break-all block">
              {pathname}
            </code>
            {error.stack && (
              <details className="mt-2 text-xs text-destructive/80">
                <summary>Stack trace</summary>
                <pre className="overflow-auto max-h-40 mt-1 p-1 bg-black/10 rounded">
                  {error.stack}
                </pre>
              </details>
            )}
          </div>
        )}
      </motion.div>

      {/* Debug panel - only shown in dev mode */}
      {isDev && (
        <div className="mt-12 w-full max-w-2xl bg-background border rounded-lg p-4 text-left">
          <h3 className="font-mono font-bold text-sm mb-2 flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            DEBUG CONSOLE
          </h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-muted-foreground">Route:</span>{" "}
              <code className="bg-secondary px-1 rounded">{pathname}</code>
            </p>
            <p>
              <span className="text-muted-foreground">Environment:</span>{" "}
              <code className="bg-secondary px-1 rounded">
                {process.env.NODE_ENV}
              </code>
            </p>
            <p>
              <span className="text-muted-foreground">Error name:</span>{" "}
              <code className="bg-secondary px-1 rounded">{error.name}</code>
            </p>
            <p className="pt-2 text-muted-foreground text-xs">
              Tip: Check your component that caused the error for runtime issues
            </p>
          </div>
        </div>
      )}
    </div>
  );
}