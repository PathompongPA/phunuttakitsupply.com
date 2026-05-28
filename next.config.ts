import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pathompong.myddns.me",
      },
    ],
  },
};

export default nextConfig;
