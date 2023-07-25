import React, { use } from 'react';
import { getAllPosts } from '@/lib/api';
import Post from './Post';

function Main() {
  const allPosts = use(
    getAllPosts([
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt',
      'content',
    ])
  );

  return (
    <>
      {allPosts
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map(
          ({
            title,
            postType,
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
              postType={postType}
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
