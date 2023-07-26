import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'posts');

type Items = {
  [key: string]: string;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  let strippedData: Items = {};

  for (const [key, value] of Object.entries(data)) {
    if (fields.includes(key)) {
      strippedData[key] = value;
    }
  }

  const items: Items = { content, ...strippedData };
  return items;
}

export async function getAllFiles(fields: string[] = []): Promise<Items[]> {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));

  return posts;
}
