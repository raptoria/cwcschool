import { FileContent } from '@/lib/getFiles';
import { StyledContent } from '@/lib/shared';

interface Props {
  content: FileContent;
}

const PageContent = async ({ content }: Props) => {
  return (
    <>
      {content && (
        <StyledContent dangerouslySetInnerHTML={{ __html: content }} />
      )}
      <p />
    </>
  );
};

export default PageContent;
