import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomComponents } from "@/components/mdx-components/mdx-components";
import { getDocsIndex } from "@/lib/mdx-all";
import ClientWrapper from "@/hooks/ClientWrapper";

export default async function DocsIndexPage({}) {
  const { raw, headings } = await getDocsIndex();

  return (
    <div className="flex gap-8">
      <div className="prose dark:prose-invert flex-1">
        <MDXRemote source={raw} components={CustomComponents} />
        <ClientWrapper headings={headings} />
      </div>
    </div>
  );
}
