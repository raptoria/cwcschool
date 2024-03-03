import { IPageContent, LinkItem } from '@/lib/shared';
import PageContent from '@/ui/PageContent';
import { QueryParams, SanityDocument } from 'next-sanity';
import { loadQuery } from '@/sanity/lib/store';
import { PAGE_QUERY, PAGES_QUERY } from '@/sanity/lib/queries';

export async function generateStaticParams() {
  const { data } = await loadQuery<SanityDocument<LinkItem[]>>(PAGES_QUERY);
  return data;
}

const Page = async ({ params }: { params: QueryParams }) => {
  const { data } = await loadQuery<SanityDocument<IPageContent>>(
    PAGE_QUERY,
    params
  );

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PageContent content={data?.content} />
    </>
  );
};

export default Page;
