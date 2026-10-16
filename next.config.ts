import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tudublin11.b-cdn.net",
      },
    ],
  },

  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "fuzzy-funicular-9656x5v6g397qr-3000.app.github.dev",
        "*.app.github.dev",
      ],
    },
  },
};

export default nextConfig;