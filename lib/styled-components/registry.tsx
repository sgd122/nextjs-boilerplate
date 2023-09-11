'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';

import theme from '@/lib/styled-components/theme';
import { notoSerifFont, pretendardFont } from '@/styles/fonts';
import GlobalStyle from '@/styles/global-styles';

const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --font-pretendard: ${pretendardFont.style.fontFamily};
              --font-noto-serif ${notoSerifFont.style.fontFamily}, sans-serif;
            }
            `,
          }}
        />
        {styles}
      </>
    );
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
