import { MDXRemote } from 'next-mdx-remote/rsc';
import { getDocBySlug, useMdxDocs } from '@/lib/mdx';
import { CustomComponents } from '@/components/mdx-components/mdx-components';
import ClientWrapper from '@/hooks/ClientWrapper';

export default async function DocPage({ params }) {
  const { category, slug } = await params;
  // const doc = await getDocBySlug(category, slug);

  const {doc,headings} = await useMdxDocs(category, slug);

    // console.log(`slug: ${slug} `);
  if (!doc) return <div>
    <h1 className="text-2xl font-bold">Document not found</h1>
    <p className="text-muted-foreground">The requested document does not exist.</p>
  </div>;


  return (
    <div className="prose dark:prose-invert mx-auto">
      {/* <h1>{doc.frontMatter.title}</h1> */}
      <MDXRemote
        source={doc?.source}
        components={CustomComponents}
      />
       <ClientWrapper headings={headings} />
    </div>
  );
}
