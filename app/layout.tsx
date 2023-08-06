import '@/styles/globals.css';
import { Source_Sans_Pro, Bitter } from 'next/font/google';
import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import Navbar from '@/ui/Navbar';
import { styled } from '@linaria/react';
import { getFileBySlug, getFileSlugs } from '@/lib/getFiles';
import { Directory } from '@/lib/types';

const StyledMain = styled.main`
  display: grid;
  grid-auto-columns: 50rem;
  justify-content: center;
  margin: var(--space-md);

  @media only screen and (max-width: 960px) {
    grid-auto-columns: auto;
  }
`;

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

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const info = await getFileBySlug(Directory.pageShared, 'info', [
    'name',
    'address',
    'phone',
    'email',
    'blurb',
    'content',
  ]);

  const { name, address, phone, email, blurb, content } = info;
  const links = await getNavigationLinks();

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>Clearwater Chinese School</title>
      </head>
      <body className={`${primaryFont.variable} ${headerFont.variable}`}>
        <Header name={name} address={address} phone={phone} />
        <Navbar links={links} />
        <StyledMain>{children}</StyledMain>
        <Footer
          name={name}
          address={address}
          phone={phone}
          email={email}
          blurb={blurb}
          content={content}
        />
      </body>
    </html>
  );
};

export default RootLayout;
