import { StyledContent, PostContent } from '@/lib/shared';

interface Props {
  content: PostContent;
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
