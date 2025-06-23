import { MDXRemote } from "next-mdx-remote/rsc";
import {  useMdxDocs } from "@/lib/mdx";
import { CustomComponents } from "@/components/mdx-components/mdx-components";
import ClientWrapper from "@/hooks/ClientWrapper";
import { DocsPager } from "@/components/Docs/docs-pager";
import { Breadcrumbs } from "@/components/Docs/docs-breadcrumb";

export async function generateMetadata({params}) {
const { category, slug } = await params;

  const { frontmatter } = useMdxDocs(category, slug);

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

export default async function DocPage({ params }) {
  const { category, slug } = await params;

  const { doc, headings } = useMdxDocs(category, slug);

  return (
    <>
      <div className="flex gap-8 ">
        <div className="prose-vercel dark:prose-invert flex-1 ">
        <Breadcrumbs/>
          <MDXRemote source={doc?.source} components={CustomComponents} />
          <ClientWrapper headings={headings} />
        </div>
      </div>
      <DocsPager currentSlug={`docs/${category}/${slug}`} />
    </>
  );
}