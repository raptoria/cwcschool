import React, { use } from 'react';
import { getAllPosts } from '@/lib/api';
import Post from './Post';
import { styled } from '@linaria/react';

const StyledMain = styled.main`
  display: grid;
  grid-auto-columns: 50rem;
  justify-content: center;
`;

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
    <StyledMain>
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
          }) => (
            <Post
              key={title}
              title={title}
              content={content}
              postType={postType}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              imageWidth={parseInt(imageWidth) || 200}
              imageHeight={parseInt(imageHeight) || 200}
            />
          )
        )}
    </StyledMain>
  );
}

export default Main;
