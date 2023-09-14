// eslint-disable-next-line camelcase
import { Noto_Sans_KR, Noto_Serif } from 'next/font/google';
import localFont from 'next/font/local'; // Font files can be colocated inside of `app`

// Font files can be colocated inside of `app`
export const notoSerifFont = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-noto-serif',
});

export const pretendardFont = localFont({
  src: './PretendardVariable.woff2',
  style: 'normal',
  variable: '--font-pretendard',
});

export const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  preload: false,
  weight: ['100', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
  variable: '--font-noto-sans-kr', // 가변 폰트의 경우, 사용할 css 변수명
});
