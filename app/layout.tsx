import '@/styles/globals.css';
import { Source_Sans_Pro, Bitter } from 'next/font/google';
import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import Navbar from '@/ui/Navbar';
import { styled } from '@linaria/react';
import { getFileSlugs, getFileBySlug } from '@/lib/api';
import { Directory } from 'shared/types';

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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const navigationLinks = getFileSlugs(Directory.pages);
  const info = getFileBySlug(Directory.pageContent, 'info', [
    'name',
    'address',
    'phone',
    'facebook',
    'content',
  ]);

  const { name, address, phone, facebook, content } = info;

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>Clearwater Chinese School</title>
      </head>
      <body className={`${primaryFont.variable} ${headerFont.variable}`}>
        <div>
          <Header name={name} address={address} phone={phone} />
          <Navbar links={navigationLinks} />
          <StyledMain>{children}</StyledMain>
          <Footer
            name={name}
            address={address}
            phone={phone}
            facebook={facebook}
            content={content}
          />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
