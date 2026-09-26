import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // This is a search-led portfolio where most visits are a visitor's first
  // page view. Inlining the small Tailwind bundle removes the only
  // render-blocking request reported by mobile Lighthouse.
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/experience",
        destination: "/#experience",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: true,
      },
      {
        source: "/skills",
        destination: "/#skills",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
