import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is for the low-resolution Demo Day photos, where 75 adds visible artifacts.
    qualities: [75, 90],
  },
};

export default nextConfig;
