import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // untuk mengizinkan domain url gambar mana aja yang boleh diproses Next.js
      },
    ],
  },
};

export default nextConfig;
