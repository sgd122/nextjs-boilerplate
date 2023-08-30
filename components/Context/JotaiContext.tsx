'use client';

import { Provider } from 'jotai';
import type { PropsWithChildren } from 'react';

const JotaiContext = ({ children }: PropsWithChildren) => (
  <Provider>{children}</Provider>
);

export default JotaiContext;
