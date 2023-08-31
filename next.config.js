/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // loader: 'custom',
    // loaderFile: './my/image/loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'developers.kakao.com',
        port: '',
        pathname: '/assets/img/about/logos/kakaolink/**',
      },
    ],
    // 기기의 너비 중단점 목록
    imageSizes: [32, 64, 96, 128, 256],
    // 이미지 가로 너비(px) 목록,
    // deviceSizes 배열과 연결되어 이미지 srcset 생성하는데 사용
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
};

module.exports = nextConfig;
