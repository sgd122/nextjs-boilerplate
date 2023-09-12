'use client';
import type { PropsWithChildren } from 'react';
import React from 'react';

import JotaiContext from '@/components/Context/JotaiContext';
import ReactQueryContext from '@/components/Context/ReqctQueryContext';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <JotaiContext>
      <ReactQueryContext>{children}</ReactQueryContext>
    </JotaiContext>
  );
};

export default Providers;
