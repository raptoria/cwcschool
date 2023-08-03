import PageContent from '@/ui/PageContent';

const Page = ({ params: { slug = '/' } }) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PageContent slug={slug} />
    </>
  );
};

export default Page;
