// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/512/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "iad.microlink.io",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "ui.shadcn.com",
      },
      {
        protocol: "https",
        hostname: "tanstack.com",
      },
      {
        protocol: "https",
        hostname: "icon.icepanel.io",
      },
      {
        protocol: "https",
        hostname: "esbenp.gallerycdn.vsassets.io",
      },
      {
        protocol: "https",
        hostname: "wallabyjs.gallerycdn.vsassets.io",
      },
      {
        protocol: "https",
        hostname: "ritwickdey.gallerycdn.vsassets.io",
      },
      {
        protocol: "https",
        hostname: "github.gallerycdn.vsassets.io",
      },
      {
        protocol: "https",
        hostname: "formulahendry.gallerycdn.vsassets.io",
      },
      {
        protocol: "https",
        hostname: "eamodio.gallerycdn.vsassets.io",
      },
      {
        protocol: "https",
        hostname: "bradlc.gallerycdn.vsassets.io",
      },
      {
        protocol: "https",
        hostname: "dbaeumer.gallerycdn.vsassets.io",
      },
    ],
  },
  transpilePackages: ["three", "framer-motion-3d", "framer-motion"],
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: false,
};

export default nextConfig;
