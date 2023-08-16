import { getFileSlugs } from '@/lib/getFiles';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const directory = searchParams.get('directory') || '';

  const links = await getFileSlugs(directory);

  const readableLinks = links.map((link) => {
    const linkRoute = link.replace(/^[^\-]+-(?<title>.+)\.md$/, '$<title>');
    return {
      label: linkRoute.charAt(0).toUpperCase() + linkRoute.slice(1),
      key: linkRoute,
      slug: linkRoute,
    };
  });

  return new Response(JSON.stringify(readableLinks), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
