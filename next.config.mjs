/** @type {import('next').NextConfig} */
import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
    distDir: "build",
    reactStrictMode: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    }
};

export default withPWA({
    dest: "public",
    disable: false,
    register: true,
    skipWaiting: true,
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/fonts\.(?:gstatic|googleapis)\.com\/.*/i,
            handler: "CacheFirst",
            options: {
                cacheName: "google-fonts",
                expiration: {
                    maxEntries: 4,
                    maxAgeSeconds: 365 * 24 * 60 * 60
                }
            }
        },
        {
            urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            handler: "StaleWhileRevalidate",
            options: {
                cacheName: "static-font-assets",
                expiration: {
                    maxEntries: 4,
                    maxAgeSeconds: 7 * 24 * 60 * 60
                }
            }
        },
        {
            urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            handler: "StaleWhileRevalidate",
            options: {
                cacheName: "static-image-assets",
                expiration: {
                    maxEntries: 64,
                    maxAgeSeconds: 24 * 60 * 60
                }
            }
        }
    ]
})(nextConfig);

