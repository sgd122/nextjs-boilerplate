import type { Metadata } from 'next';
import React from 'react';

import Providers from '@/components/Context/Providers';
import AuthContext from '@/components/Context/SessionContext';
import { notoSansKr, notoSerifFont, pretendardFont } from '@/styles/fonts';
import { getUserServerSession } from '@/utils/session/getUserServerSession';
import '@/styles/global.scss';

export const metadata: Metadata = {
  title: {
    template: '%s | GiDong',
    default: 'GiDong',
  },
  description: 'Generated by create next app',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const { session } = await getUserServerSession();
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable}  ${pretendardFont.variable} ${notoSerifFont.variable}`}
    >
      <AuthContext session={session}>
        <body>
          <Providers>{children}</Providers>
        </body>
      </AuthContext>
    </html>
  );
};

export default RootLayout;
