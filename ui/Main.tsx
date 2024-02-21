import { FileContent, getAllFiles } from '@/lib/getFiles';
import Post from './Post';
import { Directory } from '@/lib/shared';
import { getFields } from '@/lib/helpers';

export default async function Main() {
  const allPosts = await getAllFiles(
    Directory.posts,
    getFields(Directory.posts)
  );

  return (
    <>
      {allPosts
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map(
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
