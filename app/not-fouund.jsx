// app/not-found.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal, Ghost, Code2, RotateCw } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const pathname = usePathname();
  const isAPIRoute = pathname.startsWith('/api');
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-gradient-to-b from-background to-muted/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto"
      >
        <div className="relative mb-8">
          <Ghost className="w-24 h-24 text-primary mx-auto" />
          <Terminal className="absolute -right-4 -bottom-4 w-10 h-10 text-yellow-500 bg-background rounded-md p-1 border" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          404: Resource Not Found
        </h1>
        
        <div className="bg-secondary/50 p-4 rounded-lg mb-6 font-mono text-sm text-left overflow-x-auto">
          <p className="text-muted-foreground mb-2">Requested path:</p>
          <code className="text-foreground break-all">{pathname}</code>
        </div>

        {isAPIRoute ? (
          <p className="text-muted-foreground mb-6">
            API endpoint not implemented. Check your API routes.
          </p>
        ) : (
          <p className="text-muted-foreground mb-6">
            The resource you requested couldn't be located in the application bundle.
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="default" className="gap-2">
            <Link href="/">
              <RotateCw className="w-4 h-4" />
              Return Home
            </Link>
          </Button>
          
          <Button asChild variant="secondary" className="gap-2">
            <Link href="/docs">
              <Code2 className="w-4 h-4" />
              View Documentation
            </Link>
          </Button>
        </div>

        {isDev && (
          <div className="mt-8 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
            <h3 className="text-sm font-medium text-destructive mb-2">
              Development Hint
            </h3>
            <p className="text-xs text-destructive/80">
              This route isn't matched in your app router. Check your page.tsx files.
            </p>
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
              <span className="text-muted-foreground">Route:</span>{' '}
              <code className="bg-secondary px-1 rounded">{pathname}</code>
            </p>
            <p>
              <span className="text-muted-foreground">Environment:</span>{' '}
              <code className="bg-secondary px-1 rounded">{process.env.NODE_ENV}</code>
            </p>
            <p className="pt-2 text-muted-foreground text-xs">
              Tip: Check your app router structure in /app directory
            </p>
          </div>
        </div>
      )}
    </div>
  );
}