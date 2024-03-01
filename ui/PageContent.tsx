import { StyledContent, IPageContent } from '@/lib/shared';

interface Props {
  content: IPageContent;
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
