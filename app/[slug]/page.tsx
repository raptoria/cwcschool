import PageContent from '@/ui/PageContent';

const Page = ({ params: { slug = '/' } }) => {
  return <PageContent slug={slug} />;
};

export default Page;
