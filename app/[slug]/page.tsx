import PageContent from '@/ui/PageContent';
import { FileContent } from '@/lib/getFiles';
import { getBaseUrl } from '@/lib/getBaseUrl';

async function getPost(slug: string) {
  const res = await fetch(`${getBaseUrl()}/api/files?slug=${slug}`);

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const fileContent = (await res.json()) as FileContent;
  return fileContent;
}

const Page = async ({ params: { slug = '/' } }) => {
  const post = await getPost(slug);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PageContent post={post} />
    </>
  );
};

export default Page;
