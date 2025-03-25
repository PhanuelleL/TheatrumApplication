/** @type {import('next').NextConfig} */

const nextConfig = {
 async headers() {
  return [
   {
    source: "/(.*)",
    headers: [
     {
      key: "Cache-Control",
      value: "public, max-age=3600, stale-while-revalidate=59",
     },
    ],
   },
  ];
 },
};

export default nextConfig;
