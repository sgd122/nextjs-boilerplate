import type { Metadata } from 'next';

import { fetchMainBanners } from '@/api/domains/main';
import ViewPost from '@/app/post/view';
import HydratePage from '@/components/basic/HydratePage';
import getQueryClient from '@/utils/query/getQueryClient';

export const metadata: Metadata = {
  title: 'Post',
};

const Post = async () => {
  const sampleId = 1;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['fetchMainBanners', sampleId], () =>
    fetchMainBanners(sampleId)
  );

  return (
    <HydratePage queryClient={queryClient}>
      <ViewPost />
    </HydratePage>
  );
};

export default Post;
