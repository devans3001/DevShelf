import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomComponents } from "@/components/mdx-components/mdx-components";
import { getDocsParams } from "@/lib/mdx-all";
import ClientWrapper from "@/hooks/ClientWrapper";
import { DocsPager } from "@/components/Docs/docs-pager";

export async function generateMetadata({params}) {
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

  const {  headings,content } = await getDocsParams(category);

  const id = category || "/"

  // console.log("content",content)
  // console.log("params",params)

  return (
    <>
    <div className="flex gap-8">
      <div className="prose dark:prose-invert flex-1">
        <MDXRemote source={content} components={CustomComponents} />
        <ClientWrapper headings={headings} />
      </div>
    </div>
    <DocsPager currentSlug={`docs/${id}`}/>
    </>
  );
}
