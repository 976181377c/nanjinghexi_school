import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.4", "localhost", "127.0.0.1"],
  output: 'export',
  basePath: '/nanjinghexi_school',
  assetPrefix: '/nanjinghexi_school/',
};

export default nextConfig;
