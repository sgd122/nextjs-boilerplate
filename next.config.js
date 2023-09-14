/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    // prependData 옵션 추가
    prependData: `@import "@/styles/_variables.scss"; @import "@/styles/_mixins.scss";`,
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
    // imageSizes: [32, 64, 96, 128, 256],
    imageSizes: [64, 128],
    // 이미지 가로 너비(px) 목록,
    // deviceSizes 배열과 연결되어 이미지 srcset 생성하는데 사용
    deviceSizes: [320, 640, 1080, 1200],
  },
};

module.exports = nextConfig;
