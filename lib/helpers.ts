import { FileContent } from '@/lib/getFiles';
import { getBaseUrl } from './getBaseUrl';
import { Directory, LinkItem } from './shared';

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
