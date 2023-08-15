import { getPostByRoute } from '@/lib/helpers';
import PageContent from '@/ui/PageContent';

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
