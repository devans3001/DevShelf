import { MDXRemote } from "next-mdx-remote/rsc";
import { getDocBySlug, useMdxDocs } from "@/lib/mdx";
import { CustomComponents } from "@/components/mdx-components/mdx-components";
import ClientWrapper from "@/hooks/ClientWrapper";
import { DocsPager } from "@/components/Docs/docs-pager";

export default async function DocPage({ params }) {
  const { category, slug } = await params;

  const { doc, headings } = await useMdxDocs(category, slug);

  if (!doc)
    return (
      <div>
        <h1 className="text-2xl font-bold">Document not found</h1>
        <p className="text-muted-foreground">
          The requested document does not exist.
        </p>
      </div>
    );

  return (
    <>
      <div className="prose dark:prose-invert mx-auto">
        <MDXRemote source={doc?.source} components={CustomComponents} />
        <ClientWrapper headings={headings} />
      </div>
      <DocsPager currentSlug={`docs/${category}/${slug}`} />
    </>
  );
}
