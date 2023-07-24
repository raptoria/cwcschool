import '@/styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>Clearwater Chinese School</title>
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;