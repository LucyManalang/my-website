import React from 'react';

import '../styles/globals.css';

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
