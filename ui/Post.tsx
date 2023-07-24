'use client';
import Image from 'next/image';
import { styled } from '@linaria/react';

export const StyledHeader = styled.h3`
  color: var(--secondary-accent-color);
`;

type Props = {
  title: string;
  postType: string;
  imageWidth: number;
  imageHeight: number;
  imageSrc: string;
  imageAlt: string;
  content: any;
};

const Post = ({
  title,
  imageWidth,
  imageHeight,
  imageSrc = '',
  imageAlt = '',
  content,
}: Props) => {
  return (
    <>
      <StyledHeader>{title}</StyledHeader>
      {imageSrc ? (
        <Image
          src={imageSrc}
          unoptimized
          alt={imageAlt || ''}
          width={imageWidth}
          height={imageHeight}
        />
      ) : undefined}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default Post;
