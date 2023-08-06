import Main from '@/ui/Main';

const Page = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Main />
    </>
  );
};

export default Page;
