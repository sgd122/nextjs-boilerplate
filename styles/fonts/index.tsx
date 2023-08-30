// eslint-disable-next-line camelcase
import { Noto_Sans_KR, Noto_Serif } from 'next/font/google';
import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
export const notoSerifFont = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-noto-serif',
});

export const notoSansKr = Noto_Sans_KR({
  weight: ['100', '400', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});

export const pretendardFont = localFont({
  src: './PretendardVariable.woff2',
  style: 'normal',
  variable: '--font-pretendard',
});
