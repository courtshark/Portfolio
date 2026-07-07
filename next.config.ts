import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Project renamed after the original URL had already been published.
      {
        source: "/projects/datacenter-tracker",
        destination: "/projects/ai-infrastructure-research-desk",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
