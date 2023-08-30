import { useQuery } from '@tanstack/react-query';

import { fetchMainBanners } from '@/api/domains/main';

export const useFetchMainBanners = (id: number) =>
  useQuery({
    queryKey: ['fetchMainBanners', id],
    queryFn: async () => {
      const result = await fetchMainBanners(id);
      return result;
    },
  });
