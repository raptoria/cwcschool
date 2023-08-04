import { Directory } from 'shared/types';
import { FileContent, getFileByRoute } from 'app/api/files/getFiles';

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

  //return new Response(JSON.stringify({ name: 'John Doe' }));
}
