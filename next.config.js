/**
 * @type {import('next').NextConfig}
 * */

const path = require("path");

const alias = {
  "@/src": path.resolve(__dirname, "src"),
  "@/public": path.resolve(__dirname, "public"),
  "@/styles": path.resolve(__dirname, "styles"),
  "@/utils": path.resolve(__dirname, "src/utils"),
  "@/hooks": path.resolve(__dirname, "src/hooks"),
  "@/public": path.resolve(__dirname, "public"),
};

const nextConfig = {
  reactStrictMode: true,
  // custom webpack
  webpack: (config) => {
    config.resolve.alias = Object.assign(config.resolve.alias, alias);

    return config;
  },
};
module.exports = nextConfig;
