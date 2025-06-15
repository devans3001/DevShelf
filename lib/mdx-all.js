import fs from 'fs';
import path from 'path';
import { extractHeadings } from './mdx';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

const CONTENT_PATH = path.join(process.cwd(), 'contents');

export async function getDocsIndex() {
  const filePath = path.join(CONTENT_PATH, 'docs.mdx');
  const source = fs.readFileSync(filePath, 'utf8');
const {content,data} = matter(source)
  const headings = extractHeadings(source);

  return { filePath, raw: content, headings,frontmatter:data };
}
export async function getDocsParams(cat) {

  try{

    const filePath = path.join(CONTENT_PATH,"docs", `${cat}.mdx`);
    await fs.accessSync(filePath)
    const source = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(source);
    
    const headings = extractHeadings(source);
    
    return { filePath, frontmatter: data, headings,content };
  }catch(err){
     if (err.code === 'ENOENT') {
          return notFound() 
        }
        throw new Error("Some Error Relating to Route Occured",err)
  }
}

export function getAllDocs() {
  const files = walkSync(CONTENT_PATH);

  const docs = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const source = fs.readFileSync(file, 'utf8');
      const { data } = matter(source);

      const relativePath = path.relative(CONTENT_PATH, file);
      const slug = relativePath.replace(/\.mdx$/, '').replace(/\\/g, '/'); 


      return {
        title: data.title ?? 'Untitled',
        description: data.description ?? '',
        order: data.order ?? 999,
        slug: slug.includes("docs") ? `${slug}` : `docs/${slug}`,
      };
    })
    .sort((a, b) => a.order - b.order);

  return docs;
}

function walkSync(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkSync(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  });

  return fileList;
}