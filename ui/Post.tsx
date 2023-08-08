'use client';
import Image from 'next/image';
import { UserOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { styled } from '@linaria/react';
import { StyledContent } from '@/lib/shared';

const StyledMetadata = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: var(--space-md);
  margin-bottom: var(--space-md);
  font-size: 1rem;

  h2 {
    margin-bottom: var(--space-x-sm);
  }
`;

interface Props {
  title: string;
  imageWidth: number;
  imageHeight: number;
  imageSrc: string;
  imageAlt: string;
  content: any;
  date: string;
  author: string;
}

const Post = ({
  title,
  imageWidth,
  imageHeight,
  imageSrc = '',
  imageAlt = '',
  content,
  date,
  author,
}: Props) => {
  return (
    <StyledContent>
      <h2>{title}</h2>
      <StyledMetadata>
        {date ? (
          <div>
            <ClockCircleOutlined
              style={{
                color: `var(--primary-color)`,
                marginRight: `var(--space-x-sm)`,
              }}
            />
            {date}
          </div>
        ) : null}

        {author ? (
          <div>
            <UserOutlined
              style={{
                color: `var(--secondary-color)`,
                marginRight: `var(--space-x-sm)`,
              }}
            />
            {author}
          </div>
        ) : null}
      </StyledMetadata>
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
      <p />
    </StyledContent>
  );
};

export default Post;
