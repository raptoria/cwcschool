import PageContent from '@/ui/PageContent';
import { Directory } from 'shared/types';
import { FileContent, getFileSlugs } from 'shared/getFiles';
import { getBaseUrl } from 'shared/getBaseUrl';

// export async function generateStaticParams() {
//   const links = await getFileSlugs(Directory.pageContent);
//   const staticParams = links.map((link) => {
//     slug: link;
//   });
//   console.log(staticParams);
//   return staticParams;
// }

async function getPost(slug: string) {
  const res = await fetch(`${getBaseUrl()}/api/files?slug=${slug}`);
  console.log(res);
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
