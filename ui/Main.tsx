import { FileContent, getAllFiles } from '@/lib/getFiles';
import Post from './Post';
import { Directory } from '@/lib/shared';
import { getFields } from '@/lib/helpers';
import { SanityDocument } from 'next-sanity';
import { loadQuery } from '@/sanity/lib/store';
import { POSTS_QUERY } from '@/sanity/lib/queries';

export default async function Main() {
  // const allPosts = await getAllFiles(
  //   Directory.posts,
  //   getFields(Directory.posts)
  // );

  const { data } = await loadQuery<SanityDocument<FileContent[]>>(POSTS_QUERY);

  return (
    <>
      {data.map(
        ({
          title,
          imageSrc,
          imageAlt,
          imageWidth,
          imageHeight,
          content,
          author,
          date,
        }) => (
          <Post
            key={title}
            title={title}
            content={content}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            author={author}
            date={date}
            imageWidth={parseInt(imageWidth) || 200}
            imageHeight={parseInt(imageHeight) || 200}
          />
        )
      )}
    </>
  );
}
