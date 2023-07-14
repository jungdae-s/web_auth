/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
            {
                protocol: 'http',
                hostname: 'k.kakaocdn.net',
                port: '',
                pathname: '/dn/**',
            },
            {
                protocol: 'https',
                hostname: 'phinf.pstatic.net',
                port: '',
                pathname: '/contact/**',
            },
        ],
    },
}

module.exports = nextConfig
