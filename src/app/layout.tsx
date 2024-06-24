import '../styles/globals.css';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Lucy Manalang</title>
        <meta
          name="Lucy Manalang Portfolio"
          content="I am a rising sophomore at Macalester College and I am highly
            motivated and enthusiastic about computer programming."
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
