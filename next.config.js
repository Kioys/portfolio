const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/portafolio-matias-arratibel.appspot.com/o/**',
      },
    ],
  },
};

module.exports = nextConfig;
