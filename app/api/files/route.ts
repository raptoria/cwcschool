import { FileContent, getFileByRoute } from 'shared/getFiles';
import { Directory } from 'shared/types';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug') || '';

  const fileContent: FileContent | null = await getFileByRoute(
    Directory.pageContent,
    slug,
    ['content']
  );

  return new Response(JSON.stringify(fileContent), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
