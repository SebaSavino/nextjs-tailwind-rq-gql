/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/auth',
        permanent: true,
        destination: '/auth/login'
      },
    ]
  }
}

module.exports = nextConfig
