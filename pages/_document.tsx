import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generate your idea with ease." />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Idea Generator" />
        <meta itemProp="description" content="Generate your idea with ease." />
        <meta property="og:site_name" content="ekaai.com" />
        <meta itemProp="image" content="https://ekaai.com/og-image.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.ekaai.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Idea Generator" />
        <meta
          property="og:description"
          content="Generate your idea with ease."
        />
        <meta property="og:image" content="http://ekaai.com/og-image.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Idea Generator" />
        <meta
          name="twitter:description"
          content="Generate your idea with ease."
        />
        <meta property="og:image" content="https://ekaai.com/og-image.png" />
        <meta name="twitter:image" content="http://ekaai.com/og-image.png" />
      </Head>
      <body className="transition-colors duration-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
