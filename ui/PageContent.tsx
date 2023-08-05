import { FileContent } from 'shared/getFiles';

interface Props {
  post: FileContent;
}

const PageContent = async ({ post }: Props) => {
  return (
    <>
      {post && <div dangerouslySetInnerHTML={{ __html: post?.content }} />}
      <p />
    </>
  );
};

export default PageContent;
