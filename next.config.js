/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pokemontcg.io',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'images.ygoprodeck.com',
            port: '',
            pathname: '/**',
          }
        ],
      },
};

module.exports = nextConfig;
