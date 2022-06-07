/**
 * @type {import('next').NextConfig}
 * */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  // custom webpack
  webpack: (config) => {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      "@/src": path.resolve(__dirname, "src"),
      "@/public": path.resolve(__dirname, "public"),
      "@/styles": path.resolve(__dirname, "styles"),
      "@/utils": path.resolve(__dirname, "src/utils"),
    });

    return config;
  },
};
module.exports = nextConfig;
