import './globals.css';
import type { Metadata } from 'next';

import ReactQueryContext from '@/components/Context/ReqctQuery';
import AuthContext from '@/components/Context/SessionContext';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from '@/styles/global-styles';
import { getUserServerSession } from '@/utils/session/getUserServerSession';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getUserServerSession();
  return (
    <html lang="ko">
      <AuthContext session={session}>
        <body>
          <GlobalStyle />
          <StyledComponentsRegistry>
            <ReactQueryContext>{children}</ReactQueryContext>
          </StyledComponentsRegistry>
        </body>
      </AuthContext>
    </html>
  );
};

export default RootLayout;
