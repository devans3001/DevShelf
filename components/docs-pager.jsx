import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function DocsPager() {
  return (
    <div className="flex justify-between mt-16 pt-8 border-t">
      <Link
        href="#"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous: Installation
      </Link>
      <Link
        href="#"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        Next: Code Snippets
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}