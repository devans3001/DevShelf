import { MDXRemote } from 'next-mdx-remote/rsc';
import { getDocBySlug } from '@/lib/mdx';
import { CustomComponents } from '@/components/mdx-components/mdx-components';

export default async function DocPage({ params }) {
  const { category, slug } = await params;
  const doc = await getDocBySlug(category, slug);

  if (!doc) return <div>Not found</div>;

  // console.log(`Rendering doc: ${doc.source} `);

  return (
    <div className="prose dark:prose-invert max-w-4xl mx-auto">
      {/* <h1>{doc.frontMatter.title}</h1> */}
      <MDXRemote
        source={doc?.source}
        components={CustomComponents}
      />
    </div>
  );
}
