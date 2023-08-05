import { Directory } from 'shared/types';
import { FileContent, getFileByRoute } from 'shared/getFiles';

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
