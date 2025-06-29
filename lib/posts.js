import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // could use gray-matter to parse metadata
  const matterResult = matter(fileContents);

  // use remark to render markdown as html
  //  const processedContent = await remark()
  //    .use(html)
  //    .process(matterResult.content);
  //
  //  const contentHtml = processedContent.toString();

  //  const prContent = await unified()
  //   .use(remarkParse)
  //   .use(remarkGfm)
  //   .use(remarkRehype)
  //   .use(rehypePrettyCode, {
  //     theme: "github-dark",
  //   })
  //   .use(rehypeStringify)
  //   .process(matterResult.content);

  const prContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, { theme: "catppuccin-frappe" })
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = prContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

/*
 *  want meta data for ALL posts:
 *  getPostData returns more data than needed
 *
 */

export function getTileData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // could use gray-matter to parse metadata
  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
  };
}

export function getAllTileData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allTilesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // remove .md

    // read md as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // get metadata
    const matterResult = matter(fileContents);

    // combine metadata with id
    return {
      id,
      ...matterResult.data,
    };
  });

  return allTilesData;
}
