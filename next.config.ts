import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/ai-prompt-engineering",
        destination: "/work/indian-life-memorial",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
