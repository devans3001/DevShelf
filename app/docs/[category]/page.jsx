import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomComponents } from "@/components/mdx-components/mdx-components";
import { getDocsParams } from "@/lib/mdx-all";
import ClientWrapper from "@/hooks/ClientWrapper";

export default async function DocsIndexPage({ params }) {
  const { category } = await params;

  const { raw, headings } = await getDocsParams(category);

  return (
    <div className="flex gap-8">
      <div className="prose dark:prose-invert flex-1">
        <MDXRemote source={raw} components={CustomComponents} />
        <ClientWrapper headings={headings} />
      </div>
    </div>
  );
}
