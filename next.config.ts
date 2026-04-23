import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.4", "localhost", "127.0.0.1"],
  basePath: '/nanjinghexi_school',
  output: "standalone",
};

export default nextConfig;
