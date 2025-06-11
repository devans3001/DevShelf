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
    ],
  },
  transpilePackages: ["three", "framer-motion-3d", "framer-motion"],
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental:{
    serverActions: true,
    mdxRs: true,
  }
};






export default nextConfig;