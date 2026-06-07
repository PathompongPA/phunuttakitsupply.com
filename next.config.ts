import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "pathompong.myddns.me",
      // },
      {
        protocol: "http",
        hostname: "localhost/api/",
      },
      {
        protocol: "http",
        hostname: "directus",
        port: "8055",
      },
    ],
  },
};

export default nextConfig;
