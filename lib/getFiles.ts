import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FileContent {
  [key: string]: string;
}

export const getFileByRoute = async (
  fileDir: string,
  slug: string,
  fields: string[] = []
) => {
  const matchedFiles = [];
  const cwdPath = path.join(process.cwd(), fileDir);
  const files = await getFileSlugs(cwdPath);

  for (const file of files) {
    if (file.includes(slug)) {
      matchedFiles.push(file);
    }
  }
  if (matchedFiles.length === 1) {
    return await getFileBySlug(fileDir, matchedFiles[0], fields);
  } else {
    return null;
  }
};

export const getFileSlugs = async (fileDir: string) => {
  const resolvedPath = path.resolve(process.cwd(), fileDir);
  return await fs.readdir(resolvedPath);
};

export const getFileBySlug = async (
  fileDir: string,
  slug: string,
  fields: string[] = []
) => {
  const realSlug = slug.replace(/\.md$/, '');
  const cwdPath = path.join(process.cwd(), fileDir, `${realSlug}.md`);

  const fileContents = await fs.readFile(cwdPath, 'utf8');
  const { content, data } = matter(fileContents);

  let strippedData: FileContent = {};

  for (const [key, value] of Object.entries(data)) {
    if (fields.includes(key)) {
      strippedData[key] = value;
    }
  }

  const fileContent: FileContent = { content, ...strippedData };
  return fileContent;
};

export const getAllFiles = async (fileDir: string, fields: string[] = []) => {
  const slugs = await getFileSlugs(fileDir);
  const files = slugs.map(async (slug) => {
    const fileContent = await getFileBySlug(fileDir, slug, fields);
    return fileContent;
  });

  return await Promise.all(files);
};
