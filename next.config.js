/** @type {import('next').NextConfig} */
const nextConfig = {   
   async rewrites() {
      const rewrites = ["comedy", "drama"].map(genre => ({
         source: `/best-${genre}-movies`,
         destination: `/genres/best-${genre}-movies`,
      }))
      return rewrites
   }
}

module.exports = nextConfig