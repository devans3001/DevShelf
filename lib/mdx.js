import fs from "fs";
import path from "path";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";
import { walkSync } from "./mdx-all";
import { notFound } from "next/navigation";

const CONTENT_PATH = path.join(process.cwd(), "contents");

export function getAllCategories() {
  return fs.readdirSync(CONTENT_PATH);
}

export function getDocsInCategory(category) {
  const categoryPath = path.join(CONTENT_PATH, category);

  if(!fs.existsSync(categoryPath)) {
    throw new Error(`Category "${category}" does not exist`);
  }

  const files = walkSync(categoryPath);

  const docs = files.map((file) => {
    const source = fs.readFileSync(file, "utf8");
    const { data } = matter(source);
    const relativePath = path.relative(CONTENT_PATH, file);
    const slug = relativePath.replace(/\.mdx$/, "").replace(/\\/g, "/");
    const name = slug.split("/").pop().split("-").map(part=> part.charAt(0).toUpperCase() + part.slice(1)).join(" ");

    return {
      href:`/docs/${slug}`,
      name,
      order: data.order || 999,
    };
  });

  return docs.sort((a,b)=> a.order - b.order);
}
// export function getDocsInCategory(category) {
//   const categoryPath = path.join(CONTENT_PATH, category);
//   return fs.readdirSync(categoryPath).map((file) => file.replace(/\.mdx$/, ""));
// }

export function getDocBySlug(category, slug) {
  try {
  const filePath = path.join(CONTENT_PATH, category, `${slug}.mdx`);
  // await fs.accessSync(filePath)
const relativePath = path.relative(path.join(process.cwd()), filePath);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return {
    source: content,
    slug,
    category,
    frontmatter: data,
    relativePath
    // mdxSource,
  };
  } catch (err) {
    if (err.code === "ENOENT") {
      return notFound();
    }
    throw err;
  }
}

export function extractHeadings(source) {
  const slugger = new GithubSlugger();
  const headingLines = source
    .split("\n")
    .filter((line) => /^###?\s/.test(line));

  return headingLines.map((raw) => {
    const text = raw.replace(/^###?\s/, "");
    const id = slugger.slug(text);
    const level = raw.startsWith("## ") ? 2 : 3;

    return { id, text, level };
  });
}

export function useMdxDocs(category, slug) {
  if (!category || !slug) {
    throw new Error("Category and slug are required");
  }
  const doc = getDocBySlug(category, slug);

  return {
    doc,
    headings: extractHeadings(doc?.source),
    frontmatter: doc.frontmatter,
  };
}
