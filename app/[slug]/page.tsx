import { getPostSlugs } from '@/lib/helpers';
import { Directory } from '@/lib/shared';
import PageContent from '@/ui/PageContent';
import { QueryParams, SanityDocument } from 'next-sanity';
import { loadQuery } from '@/sanity/lib/store';
import { PAGE_QUERY } from '@/sanity/lib/queries';

export async function generateStaticParams() {
  const params = await getPostSlugs(Directory.pageContent);
  return params;
}

const Page = async ({ params }: { params: QueryParams }) => {
  const { data } = await loadQuery<SanityDocument>(PAGE_QUERY, params);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PageContent content={data?.content} />
    </>
  );
};

export default Page;
