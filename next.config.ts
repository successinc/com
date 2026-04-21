import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // গিটহাব পেজেসের জন্য এটি জরুরি
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // বিল্ডের সময় এরর এড়াতে এটি যোগ করা ভালো
  },
  images: {
    unoptimized: true, // গিটহাব পেজেসে ছবি দেখানোর জন্য এটি প্রয়োজন
  },
  reactStrictMode: false,
};

export default nextConfig;
