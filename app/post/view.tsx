'use client';

import { useAtom } from 'jotai';

import { useFetchMainBanners } from '@/api/queries/main';
import { Root } from '@/app/post/styles';
import { isSearchToggleAtom } from '@/store';

const ViewPost = () => {
  const { data } = useFetchMainBanners(1);
  const [isSearchToggle] = useAtom(isSearchToggleAtom);

  return (
    <div>
      ViewPost: {JSON.stringify(isSearchToggle)}
      <Root>{JSON.stringify(data)}</Root>
    </div>
  );
};

export default ViewPost;
