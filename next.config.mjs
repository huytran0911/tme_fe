import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any existing Next.js config options here
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "7000",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "7000",
      },
      {
        protocol: "http",
        hostname: "www.tme.vn",
      },
      {
        protocol: "https",
        hostname: "www.tme.vn",
      },
      {
        protocol: "http",
        hostname: "tme.vn",
      },
      {
        protocol: "https",
        hostname: "tme.vn",
      },
      {
        protocol: "http",
        hostname: "admin-api.tme.vn",
      },
      {
        protocol: "https",
        hostname: "admin-api.tme.vn",
      },
      {
        protocol: "http",
        hostname: "api.tme.vn",
      },
      {
        protocol: "https",
        hostname: "api.tme.vn",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
