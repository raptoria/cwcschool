import { Directory } from 'shared/types';
import { FileContent, getFileByRoute } from 'shared/getFiles';
import { getBaseUrl } from 'shared/getBaseUrl';

interface Props {
  slug: string;
}

const PageContent = async ({ slug }: Props) => {
  // const fileContent: FileContent | null = await getFileByRoute(
  //   Directory.pageContent,
  //   slug,
  //   ['content']
  // );

  const res = await fetch(`${getBaseUrl()}/api/files?slug=${slug}`);
  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const fileContent = (await res.json()) as FileContent;

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
