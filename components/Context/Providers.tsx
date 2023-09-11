'use client';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import JotaiContext from '@/components/Context/JotaiContext';
import ReactQueryContext from '@/components/Context/ReqctQueryContext';
import StyledComponentsRegistry from '@/lib/styled-components/registry';
import theme from '@/lib/styled-components/theme';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <JotaiContext>
          <ReactQueryContext>{children}</ReactQueryContext>
        </JotaiContext>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
