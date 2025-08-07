/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // ← wajib
  images: {
    unoptimized: true,        // ← wajib untuk next/image di static export
  },
};

export default nextConfig;
