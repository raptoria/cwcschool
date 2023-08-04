import { FileContent } from 'app/api/files/getFiles';
import { getBaseUrl } from 'shared/getBaseUrl';

interface Props {
  slug: string;
}

const PageContent = async ({ slug }: Props) => {
  const res = await fetch(`${getBaseUrl()}/api/files?slug=${slug}`);
  console.log(res);
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
