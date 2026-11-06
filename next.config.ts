import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.ngrok-free.app",
    "**.ngrok-free.app",
    "*.ngrok.app",
    "**.ngrok.app",
    "*.ngrok.io",
    "**.ngrok.io",
    "*.loca.lt",
    "**.loca.lt",
    "*.trycloudflare.com",
    "**.trycloudflare.com",
  ],
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
