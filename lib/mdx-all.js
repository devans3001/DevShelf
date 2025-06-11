import fs from 'fs';
import path from 'path';
import { extractHeadings } from './mdx';

const CONTENT_PATH = path.join(process.cwd(), 'contents');

export async function getDocsIndex() {
  const filePath = path.join(CONTENT_PATH, 'docs.mdx');
  const source = fs.readFileSync(filePath, 'utf8');

  const headings = extractHeadings(source);

  return { filePath, raw: source, headings };
}
export async function getDocsParams(cat) {
  const filePath = path.join(CONTENT_PATH,"docs", `${cat}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  const headings = extractHeadings(source);

  return { filePath, raw: source, headings };
}