/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    // `quality={100}` is used in several Image components
    qualities: [75, 100],
    // The Next 16 image optimizer blocks hostnames resolving to private IPs
    // (SSRF guard). The user's local proxy (fake-ip DNS mode) resolves
    // cdn.sanity.io / unsplash to 198.18.x.x, so allow it locally.
    // On Vercel, DNS is normal and this flag is effectively a no-op.
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      { protocol: "https", hostname: "icons.duckduckgo.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};
