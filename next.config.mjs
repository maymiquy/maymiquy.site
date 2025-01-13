/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],
  env: {
    GH_TOKEN: process.env.GH_TOKEN,
    VERCEL_TOKEN: process.env.VERCEL_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      }
    ],
  },
};

export default nextConfig;