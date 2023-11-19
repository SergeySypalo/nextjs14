module.exports = {   
   async rewrites() {
      const rewrites = ["comedy", "drama"].map(genre => ({
         source: `/best-${genre}-movies`,
         destination: `/genres/best-${genre}-movies`,
      })).concat(["1", "2"].map(page => ({
         source: `/${page}`,
         destination: `/pagination/${page}`,
      })))
      return rewrites
   }
}