import '@/styles/globals.css';
import { Source_Sans_3, Bitter } from 'next/font/google';
import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import Navbar from '@/ui/Navbar';
import { IMetadata, ISharedContent, LinkItem } from '@/lib/shared';
import { Metadata } from 'next';
import {
  PAGES_QUERY,
  SHARED_QUERY,
  METADATA_QUERY,
} from '@/sanity/lib/queries';
import { SanityDocument } from 'next-sanity';
import { loadQuery } from '@/sanity/lib/store';

const primaryFont = Source_Sans_3({
  subsets: ['latin'],
  weight: '400',
  variable: '--default-font',
});

const headerFont = Bitter({
  subsets: ['latin'],
  weight: '400',
  variable: '--header-font',
});

export async function generateMetadata({}): Promise<Metadata> {
  const { data } = await loadQuery<SanityDocument<IMetadata>>(METADATA_QUERY);
  return data;
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const {
    data: { title, address, phone, email, description, content },
  } = await loadQuery<SanityDocument<ISharedContent>>(SHARED_QUERY);

  const { data } = await loadQuery<SanityDocument<LinkItem[]>>(PAGES_QUERY);

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </head>
      <body className={`${primaryFont.variable} ${headerFont.variable}`}>
        <Header title={title} address={address} phone={phone} />
        <Navbar links={data} />
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
