import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { extractHeadings } from "./mdx";
import { notFound } from "next/navigation";

const CONTENT_PATH = path.join(process.cwd(), "contents");

export function getDocsIndex() {
  const filePath = path.join(CONTENT_PATH, "docs.mdx");
  const relativePath = path.relative(path.join(process.cwd()), filePath);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const headings = extractHeadings(source);

  return { relativePath, raw: content, headings, frontmatter: data };
}

export function getAllDocSlugs() {
  const dirPath = path.join(CONTENT_PATH, "docs");
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);
  
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getDocsParams(cat) {
  const validSlugs = getAllDocSlugs();


  if (!validSlugs.includes(cat)) {
    // maybe the error disapperd cause we returned null
    return notFound();
  }

  const filePath = path.join(CONTENT_PATH, "docs", `${cat}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const headings = extractHeadings(source);
  const relativePath = path.relative(path.join(process.cwd()), filePath);

  return { relativePath, frontmatter: data, headings, content };
}

export function getAllDocs() {
  const files = walkSync(CONTENT_PATH);


  const docs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(file, "utf8");
      const { data } = matter(source);
      const headings = extractHeadings(source);
      const relativePath = path.relative(CONTENT_PATH, file);
      const slug = relativePath.replace(/\.mdx$/, "").replace(/\\/g, "/");
      const id = slug.split("/").filter(Boolean).join("-");

      // console.log("file", file);
      // console.log("relativePath", relativePath);
      return {
        id,
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        order: data.order ?? 999,
        slug: slug.includes("docs") ? `${slug}` : `docs/${slug}`,
        headings,
        keywords: data.keywords ?? ["not found"],
      };
    })
    .sort((a, b) => a.order - b.order);

  return docs;
}

export function walkSync(dir, fileList = []) {
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
