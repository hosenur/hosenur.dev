const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    images: { domains: ["ik.imagekit.io", "cdn.dribbble.com", "cdn.jsdelivr.net"] },
};

module.exports = withContentlayer(nextConfig);