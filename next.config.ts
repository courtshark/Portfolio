import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Projects renamed after the original URLs had already been published.
      {
        source: "/projects/datacenter-tracker",
        destination: "/projects/ai-infrastructure-research-desk",
        permanent: true,
      },
      {
        source: "/projects/equity-gap-calculator",
        destination: "/projects/di-calculator",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
