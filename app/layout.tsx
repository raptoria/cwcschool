import '@/styles/globals.css';
import { Source_Sans_Pro, Bitter } from 'next/font/google';
import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import Navbar from '@/ui/Navbar';
import { getFileBySlug, getFileSlugs } from '@/lib/getFiles';
import { Directory } from '@/lib/shared';
import { Metadata } from 'next';

const primaryFont = Source_Sans_Pro({
  subsets: ['latin'],
  weight: '300',
  variable: '--default-font',
});

const headerFont = Bitter({
  subsets: ['latin'],
  weight: '400',
  variable: '--header-font',
});

export async function generateStaticParams() {
  const params = await getNavigationLinks();
  return params;
}

const getNavigationLinks = async () => {
  const links = await getFileSlugs(Directory.pageContent);

  const readableLinks = links.map((link) => {
    const linkRoute = link.replace(/^[^\-]+-(?<title>.+)\.md$/, '$<title>');
    return {
      label: linkRoute.charAt(0).toUpperCase() + linkRoute.slice(1),
      key: linkRoute,
      slug: linkRoute,
    };
  });

  return readableLinks;
};

export async function generateMetadata({}): Promise<Metadata> {
  const info = await getFileBySlug(Directory.pageShared, 'info', [
    'title',
    'description',
    'keywords',
  ]);
  return {
    title: info?.title,
    description: info?.description,
    keywords: info?.keywords,
  };
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const info = await getFileBySlug(Directory.pageShared, 'info', [
    'title',
    'description',
    'keywords',
    'address',
    'phone',
    'email',
    'content',
  ]);

  const { title, address, phone, email, description, content } = info;
  const links = await getNavigationLinks();

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </head>
      <body className={`${primaryFont.variable} ${headerFont.variable}`}>
        <Header title={title} address={address} phone={phone} />
        <Navbar links={links} />
        {children}
        <Footer
          title={title}
          address={address}
          phone={phone}
          email={email}
          description={description}
          content={content}
        />
      </body>
    </html>
  );
};

export default RootLayout;
