import {
  FileContent,
  getFileByRoute,
  getFileBySlug,
  getFileSlugs,
} from '@/lib/getFiles';
import { getBaseUrl } from './getBaseUrl';
import { Directory, LinkItem } from './shared';

// export async function getPostByRoute(slug: string) {
//   const fileContent: FileContent | null = await getFileByRoute(
//     Directory.pageContent,
//     slug,
//     ['content']
//   );
//   return fileContent;
// }

// export async function getPostSlugs(directory: string) {
//   const links = await getFileSlugs(directory);

//   const readableLinks = links.map((link) => {
//     const linkRoute = link.replace(/^[^\-]+-(?<title>.+)\.md$/, '$<title>');
//     return {
//       label: linkRoute.charAt(0).toUpperCase() + linkRoute.slice(1),
//       key: linkRoute,
//       slug: linkRoute,
//     };
//   });
//   return readableLinks;
// }

// export const getPost = async (directory: string, slug: string) => {
//   const post = await getFileBySlug(directory, slug, getFields(directory));
//   return post;
// };

export async function getPostByRoute(slug: string) {
  const res = await fetch(`${getBaseUrl()}/api/post-by-route?slug=${slug}`);

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const fileContent = (await res.json()) as FileContent;
  return fileContent;
}

export async function getPostSlugs(directory: string) {
  const res = await fetch(`${getBaseUrl()}/api/posts?directory=${directory}`);

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const postSlugs: Array<LinkItem> = await res.json();
  return postSlugs;
}

export const getPost = async (directory: string, slug: string) => {
  const res = await fetch(
    `${getBaseUrl()}/api/post?directory=${directory}&slug=${slug}`
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const fileContent = (await res.json()) as FileContent;
  return fileContent;
};

export const getFields = (directory: string) => {
  switch (directory) {
    case Directory.pageShared:
      return [
        'title',
        'description',
        'keywords',
        'address',
        'phone',
        'email',
        'content',
      ];

    case Directory.posts:
      return [
        'title',
        'imageSrc',
        'imageAlt',
        'imageWidth',
        'imageHeight',
        'content',
        'author',
        'date',
      ];
  }
};
