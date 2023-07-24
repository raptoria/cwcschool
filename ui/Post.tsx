'use client';
import Image from 'next/image';
import { UserOutlined, ClockCircleOutlined } from '@ant-design/icons';

type Props = {
  title: string;
  postType: string;
  imageWidth: number;
  imageHeight: number;
  imageSrc: string;
  imageAlt: string;
  content: any;
  date: string;
  author: string;
};

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
    <>
      <h2>{title}</h2>
      <div className="metadata">
        {date ? (
          <div>
            <ClockCircleOutlined
              rev="author"
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
              rev="author"
              style={{
                color: `var(--secondary-color)`,
                marginRight: `var(--space-x-sm)`,
              }}
            />
            {author}
          </div>
        ) : null}
      </div>
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
    </>
  );
};

export default Post;
