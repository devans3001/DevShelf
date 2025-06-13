import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomComponents } from "@/components/mdx-components/mdx-components";
import { getDocsIndex } from "@/lib/mdx-all";
import ClientWrapper from "@/hooks/ClientWrapper";
import { DocsPager } from "@/components/Docs/docs-pager";

export async function generateMetadata() {
  const { frontmatter } = await getDocsIndex();

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
    },
  };
}

export default async function DocsIndexPage({}) {
  const { raw, headings } = await getDocsIndex();

  return (
    <>
      <div className="flex gap-8 ">
        <div className="prose dark:prose-invert flex-1">
          <MDXRemote source={raw} components={CustomComponents} />
          <ClientWrapper headings={headings} />
        </div>
      </div>
      <DocsPager currentSlug={`docs`} />
    </>
  );
}
