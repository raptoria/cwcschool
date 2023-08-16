import { getPostByRoute, getPostSlugs } from '@/lib/helpers';
import { Directory } from '@/lib/shared';
import PageContent from '@/ui/PageContent';

export async function generateStaticParams() {
  const params = await getPostSlugs(Directory.pageContent);
  return params;
}

const Page = async ({ params: { slug = '/' } }) => {
  const post = await getPostByRoute(slug);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PageContent post={post} />
    </>
  );
};

export default Page;
