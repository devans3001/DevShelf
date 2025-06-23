import fs from "fs";
import path from "path";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "contents");

export function getAllCategories() {
  return fs.readdirSync(CONTENT_PATH);
}

export function getDocsInCategory(category) {
  const categoryPath = path.join(CONTENT_PATH, category);
  return fs.readdirSync(categoryPath).map((file) => file.replace(/\.mdx$/, ""));
}

export function getDocBySlug(category, slug) {
  // try {
    const filePath = path.join(CONTENT_PATH, category, `${slug}.mdx`);
    // await fs.accessSync(filePath)

    const source = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(source);


    return {
      source: content,
      slug,
      category,
      frontmatter: data,
      // mdxSource,
    };
  // } catch (err) {
  //   if (err.code === "ENOENT") {
  //     return notFound();
  //   }
  //   throw err;
  // }
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
