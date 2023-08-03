import Main from '@/ui/Main';

const Page = () => {
  return (
    <section>
      {/* @ts-expect-error Server Component */}
      <Main />
    </section>
  );
};

export default Page;
