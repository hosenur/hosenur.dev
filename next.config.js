const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: { domains: ["ik.imagekit.io","cdn.dribbble.com"] },
};

module.exports = withContentlayer(nextConfig);