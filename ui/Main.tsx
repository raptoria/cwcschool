import { use } from 'react';
import { getAllFiles } from '@/lib/api';
import Post from './Post';
import { Directory } from 'shared/types';

function Main() {
  const allPosts = use(
    getAllFiles(Directory.posts, [
      'title',
      'imageSrc',
      'imageAlt',
      'imageWidth',
      'imageHeight',
      'content',
      'author',
      'date',
    ])
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

export default Main;
