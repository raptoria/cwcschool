import { IPostContent } from '@/lib/shared';
import Post from './Post';
import { SanityDocument } from 'next-sanity';
import { loadQuery } from '@/sanity/lib/store';
import { POSTS_QUERY } from '@/sanity/lib/queries';

export default async function Main() {
  const { data } = await loadQuery<SanityDocument<IPostContent[]>>(POSTS_QUERY);

  return (
    <>
      {data.map(
        ({
          title,
          imageSrc,
          imageAlt,
          width,
          height,
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
            imageWidth={width || 200}
            imageHeight={height || 200}
          />
        )
      )}
    </>
  );
}
