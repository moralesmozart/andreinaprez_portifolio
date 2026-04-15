import type { NextConfig } from "next";

/** Set in CI for GitHub project Pages (e.g. /repo-name). Local dev leaves this unset. */
const basePathRaw = (process.env.BASE_PATH ?? "").replace(/\/$/, "").trim();
const basePath = basePathRaw.length > 0 ? basePathRaw : undefined;

const nextConfig: NextConfig = {
  /** Inlined for client code that builds static asset URLs (e.g. portfolio slides). Must match BASE_PATH in CI. */
  env: {
    NEXT_PUBLIC_BASE_PATH: basePathRaw,
  },
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/neverunpackspain.com/**",
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
