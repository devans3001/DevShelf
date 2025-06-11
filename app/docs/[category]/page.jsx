
import { MDXRemote } from 'next-mdx-remote/rsc';
import { CustomComponents } from '@/components/mdx-components/mdx-components';
import {  getDocsParams } from '@/lib/mdx-all';

export default async function DocsIndexPage({params}) {


  const {category} = await params

  const { raw, headings,filePath } = await getDocsParams(category);

  console.log("slug",category)

  return (
    <div className="flex gap-8">
      <div className="prose dark:prose-invert flex-1">
        <MDXRemote source={raw} components={CustomComponents} />
     </div>
    </div>
  );
}
