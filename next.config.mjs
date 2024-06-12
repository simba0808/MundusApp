/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  redirects: async () => [
    {
      source: '/',
      destination: '/register?step=1',
      permanent: true,
    },
  ]
};

export default nextConfig;
