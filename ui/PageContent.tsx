import { FileContent, getFileByRoute } from '@/lib/api';

interface Props {
  slug: string;
}

const PageContent = ({ slug }: Props) => {
  const fileContent: FileContent | null = getFileByRoute('page-content', slug, [
    'content',
  ]);
  return (
    <>
      {fileContent && (
        <div dangerouslySetInnerHTML={{ __html: fileContent?.content }} />
      )}
      <p />
    </>
  );
};

export default PageContent;
