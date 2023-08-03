import { FileContent, getFileByRoute } from '@/lib/api';
import { Directory } from 'shared/types';

interface Props {
  slug: string;
}

const PageContent = ({ slug }: Props) => {
  const fileContent: FileContent | null = getFileByRoute(
    Directory.pageContent,
    slug,
    ['content']
  );
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
