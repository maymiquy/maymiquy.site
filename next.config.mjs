/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      "@icons-pack/react-simple-icons",
      "@primer/octicons-react",
      "@/components/ui",
      "@/components/features/common",
      "@/components/features/home",
      "@/components/features/profile",
      "@/components/features/projects",
    ],
  }
};

export default nextConfig;