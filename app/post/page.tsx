import { dehydrate } from '@tanstack/query-core';

import { fetchMainBanners } from '@/api/domains/main';
import ViewPost from '@/app/post/view';
import HydrateOnClient from '@/components/Context/HydrateOnClient';
import getQueryClient from '@/utils/query/getQueryClient';

const Post = async () => {
  const sampleId = 1;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['fetchMainBanners', sampleId], () =>
    fetchMainBanners(sampleId)
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrateOnClient state={dehydratedState}>
      <ViewPost />
    </HydrateOnClient>
  );
};

export default Post;
