// next.config.mjs


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/512/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
       
      },
    ],
  },
  transpilePackages: ["three", "framer-motion-3d", "framer-motion"],
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode:false
};






export default nextConfig;