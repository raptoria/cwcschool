import { PostContent } from '@/lib/shared';
import Post from './Post';
import { SanityDocument } from 'next-sanity';
import { loadQuery } from '@/sanity/lib/store';
import { POSTS_QUERY } from '@/sanity/lib/queries';

export default async function Main() {
  const { data } = await loadQuery<SanityDocument<PostContent[]>>(POSTS_QUERY);

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
