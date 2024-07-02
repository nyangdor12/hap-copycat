/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["loremflickr.com"],
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

export default nextConfig;
