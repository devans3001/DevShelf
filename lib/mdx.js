

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const CONTENT_PATH = path.join(process.cwd(), 'contents');

export function getAllCategories() {
  return fs.readdirSync(CONTENT_PATH);
}

export function getDocsInCategory(category) {
  const categoryPath = path.join(CONTENT_PATH, category);
  return fs.readdirSync(categoryPath).map((file) => file.replace(/\.mdx$/, ''));
}

export async function getDocBySlug(category, slug) {
  const filePath = path.join(CONTENT_PATH, category, `${slug}.mdx`);
//   console.log(`Loading doc from: ${filePath}`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

 
  // const mdxSource = await serialize(content, {
  //   mdxOptions: {
  //     remarkPlugins: [remarkGfm],
  //     rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]],
  //   },
  //   scope: data,
  // });

  return {
    source,
    frontMatter: data,
    slug,
    category,
    // mdxSource,
  };
}


export function extractHeadings(source) {
  const headingLines = source.split('\n').filter((line) => {
    return line.match(/^###?\s/);
  });

  return headingLines.map((raw) => {
    const text = raw.replace(/^###?\s/, '');
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, '-');
    const level = raw.startsWith('## ') ? 2 : 3;

    return { id, text, level };
  });
}