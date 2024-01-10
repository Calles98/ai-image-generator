/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
      {
        protocol: "https",
        hostname: "aiimagegeneratorapprod.blob.core.windows.net",
      },
    ],
  },
};

module.exports = nextConfig;
