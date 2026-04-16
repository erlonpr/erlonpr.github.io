import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: 'export', // Generate static files (HTML, CSS, JS)
  images: {
    unoptimized: true, // Disable image optimization (required for GitHub Pages static export)
  },

};

export default nextConfig;
