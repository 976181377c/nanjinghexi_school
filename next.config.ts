import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.4", "localhost", "127.0.0.1"],
  basePath:'/nanjinghexi_school',
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/nanjinghexi_school' : '',
  },
};

export default nextConfig;
