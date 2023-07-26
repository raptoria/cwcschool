import PageContent from '@/ui/PageContent';

const Page = ({ params }: any) => {
  return <PageContent slug={params.slug} />;
};

export default Page;
