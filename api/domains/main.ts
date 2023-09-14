import instance from '@/api/fetch';
import { API_URL } from '@/api/urls';

interface Sample {
  id: number;
}

export const fetchMainBanners = async (id: number) => {
  const { data } = await instance.get<Sample[]>(
    `${API_URL.DETAIL(id).pathname}`
  );

  return data;
};
