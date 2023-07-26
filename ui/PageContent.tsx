import { FileContent, getFileBySlug } from '@/lib/api';

interface Props {
  slug: string;
}

const PageContent = ({ slug }: Props) => {
  const fileContent: FileContent = getFileBySlug('page-content', slug, [
    'content',
  ]);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: fileContent?.content }} />
      <p />
    </>
  );
};

export default PageContent;
