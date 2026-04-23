import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.4", "localhost", "127.0.0.1"],
  output: 'export',

  // 禁用默认的图片优化 API（因为 GitHub Pages 不支持动态图片优化服务器）
  images: {
    unoptimized: true,
  },
  basePath: '/nanjinghexi_school',
};

export default nextConfig;
