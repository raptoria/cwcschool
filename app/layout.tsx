import { Source_Sans_Pro, Bitter } from 'next/font/google';

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
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>Clearwater Chinese School</title>
      </head>
      <body className={`${primaryFont.variable} ${headerFont.variable}`}>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
