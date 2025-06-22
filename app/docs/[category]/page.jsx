import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomComponents } from "@/components/mdx-components/mdx-components";
import { getDocsParams } from "@/lib/mdx-all";
import ClientWrapper from "@/hooks/ClientWrapper";
import { DocsPager } from "@/components/Docs/docs-pager";
import { Breadcrumbs } from "@/components/Docs/docs-breadcrumb";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { category } = await params;

  const { frontmatter } = await getDocsParams(category);

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

export default async function DocsIndexPage({ params }) {
  const { category } = await params;

  const docs = await getDocsParams(category);

  const id = category || "/";

  return (
    <>
      <div className="flex gap-8">
        <div className="prose dark:prose-invert flex-1">
          <Breadcrumbs />
          <MDXRemote source={docs.content} components={CustomComponents} />
          <ClientWrapper headings={docs.headings} />
        </div>
      </div>
      <DocsPager currentSlug={`docs/${id}`} />
    </>
  );
}
