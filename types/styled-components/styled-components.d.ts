import 'styled-components';
import type theme from '@/lib/styled-components/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: typeof theme.fontSizes;
    colors: typeof theme.colors;
    common: typeof theme.common;
  }
}
