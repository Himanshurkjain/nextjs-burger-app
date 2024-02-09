/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    mongodb_username: 'Burger123',
    mongodb_password: 'Burger123',
    mongodb_clustername: 'cluster0',
    mongodb_database: 'McDonalds',
    NEXTAUTH_URL: 'http://localhost:3000'
  },
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
