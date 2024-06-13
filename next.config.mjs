/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        domains: ['www.admin786.pnytrainings.com', 'encrypted-tbn0.gstatic.com'],
        unoptimized: true
    },
};

export default nextConfig;
