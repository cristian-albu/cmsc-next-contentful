/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.ctfassets.net",
      "assets.ctfassets.net",
      "https://www.koddezign.com",
    ],
  },
};

module.exports = nextConfig;
