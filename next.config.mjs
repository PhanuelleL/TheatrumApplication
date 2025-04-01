// /** @type {import('next').NextConfig} */

// const nextConfig = {
//     images: {
//         unoptimized: true,
//     },
//     output: 'export',
//  async headers() {
//   return [
//    {
//     source: "/(.*)",
//     headers: [
//      {
//       key: "Cache-Control",
//       value: "public, max-age=3600, stale-while-revalidate=59",
//      },
//     ],
//    },
//   ];
//  },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  unoptimized: true,
 },
 output: "export",
};

export default nextConfig;
