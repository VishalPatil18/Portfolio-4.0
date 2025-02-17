import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link href="/avatar.png" rel="shortcut icon" />
        <link href="/avatar.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/avatar.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/avatar.png" rel="icon" sizes="16x16" type="image/png" />
        <link color="#4a9885" href="/avatar.png" rel="mask-icon" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
