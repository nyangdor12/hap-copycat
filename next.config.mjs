/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["loremflickr.com"],
    }
};

module.exports = {
    typescript: {
        ignoreBuildErrors: true,
    }
}

export default nextConfig;
