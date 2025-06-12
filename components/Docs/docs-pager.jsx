// components/docs/docs-pager.jsx
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAllDocs } from '@/lib/mdx-all';

export async function DocsPager({ currentSlug }) {
  const docs = getAllDocs();
  const currentIndex = docs.findIndex((doc) => doc.slug === currentSlug);

  const prev = docs[currentIndex - 1];
  const next = docs[currentIndex + 1];

  if (!prev && !next) return null;

  return (
    <div className="flex justify-between mt-16 pt-8 border-t">
      {prev ? (
        <Link
          href={`/${prev.slug}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous: {prev.title}
        </Link>
      ) : <div />}

      {next ? (
        <Link
          href={`/${next.slug}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          Next: {next.title}
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : null}
    </div>
  );
}
