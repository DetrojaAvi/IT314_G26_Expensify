/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self'; script-src 'none';",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  