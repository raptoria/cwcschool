import { FileContent, getFileByRoute } from 'app/api';
import { Directory } from 'shared/types';

interface Props {
  slug: string;
}

const PageContent = async ({ slug }: Props) => {
  const fileContent: FileContent | null = await getFileByRoute(
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
