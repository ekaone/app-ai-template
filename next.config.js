/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/ekaone/app-ai-template",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/app-ai-template",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["i.imgur.com", "www.google.com", "media.giphy.com"],
  },
};
