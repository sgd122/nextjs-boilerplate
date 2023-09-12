'use client';

import { useAtom } from 'jotai';

import { useFetchMainBanners } from '@/api/queries/main';
import { isSearchToggleAtom } from '@/store';

const ViewPost = () => {
  const { data } = useFetchMainBanners(1);
  const [isSearchToggle] = useAtom(isSearchToggleAtom);

  return (
    <div>
      ViewPost: {JSON.stringify(isSearchToggle)}
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default ViewPost;
