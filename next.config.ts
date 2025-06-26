import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        reactCompiler: true,
    },
    eslint: {
        dirs: ["pages", "utils"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
        ignoreDuringBuilds: true, // ✅ bỏ qua lỗi ESLint khi build, nên xóa khi deploy thật
    },
};

export default nextConfig;
