import { FileContent } from '@/lib/getFiles';
import { StyledContent } from '@/lib/shared';

interface Props {
  post: FileContent;
}

const PageContent = async ({ post }: Props) => {
  return (
    <>
      {post && (
        <StyledContent dangerouslySetInnerHTML={{ __html: post?.content }} />
      )}
      <p />
    </>
  );
};

export default PageContent;
