import { dehydrate } from '@tanstack/query-core';
import type { PropsWithChildren } from 'react';
import React from 'react';

import HydrateOnClient from '@/components/Context/HydrateOnClient';
import type getQueryClient from '@/utils/query/getQueryClient';

interface Props {
  queryClient: ReturnType<typeof getQueryClient>;
}
const HydratePage: React.FC<PropsWithChildren<Props>> = async ({
  queryClient,
  children,
}) => {
  const dehydratedState = dehydrate(queryClient);

  return <HydrateOnClient state={dehydratedState}>{children}</HydrateOnClient>;
};

export default HydratePage;
