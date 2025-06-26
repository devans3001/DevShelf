import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomComponents } from "@/components/mdx-components/mdx-components";
import { getDocsIndex } from "@/lib/mdx-all";
import ClientWrapper from "@/hooks/ClientWrapper";
import { DocsPager } from "@/components/Docs/docs-pager";
import { Breadcrumbs } from "@/components/Docs/docs-breadcrumb";
import ExternalLink from "@/components/ExternalLink";
import EditOnGitHub from "@/components/Docs/docs-edit-github";

export async function generateMetadata() {
  const { frontmatter } = getDocsIndex();

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
  const docs = getDocsIndex();


  return (
    <>
      <div className="flex gap-8 ">
        <div className="prose dark:prose-invert flex-1">
           <Breadcrumbs/>
          <MDXRemote source={docs.raw} components={CustomComponents} />
          <ClientWrapper headings={docs.headings} />
        </div>
      </div>
       <EditOnGitHub path={docs.relativePath} />
      <DocsPager currentSlug={`docs`} />
    </>
  );
}
