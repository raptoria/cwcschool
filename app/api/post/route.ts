import { getFileBySlug } from '@/lib/getFiles';
import { getFields } from '@/lib/helpers';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const directory = searchParams.get('directory') || '';
  const slug = searchParams.get('slug') || '';

  const post = await getFileBySlug(directory, slug, getFields(directory));

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
