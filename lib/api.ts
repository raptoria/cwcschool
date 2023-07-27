import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export type FileContent = {
  [key: string]: string;
};

export function getFileSlugs(fileDir: string) {
  return fs.readdirSync(fileDir);
}

export function getFileBySlug(
  fileDir: string,
  slug: string,
  fields: string[] = []
) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(fileDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  let strippedData: FileContent = {};

  for (const [key, value] of Object.entries(data)) {
    if (fields.includes(key)) {
      strippedData[key] = value;
    }
  }

  const fileContent: FileContent = { content, ...strippedData };
  return fileContent;
}

export async function getAllFiles(
  dirName: string,
  fields: string[] = []
): Promise<FileContent[]> {
  const fileDir = join(process.cwd(), dirName);
  const slugs = getFileSlugs(fileDir);
  const files = slugs.map((slug) => getFileBySlug(fileDir, slug, fields));
  return files;
}
