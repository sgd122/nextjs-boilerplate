import instance from '@/api';
import { API_URL } from '@/api/urls';

interface Sample {
  id: number;
}

export const fetchMainBanners = async (id: number): Promise<Sample[]> => {
  const { data } = await instance.get<Sample[]>(`${API_URL.DETAIL(id)}`);

  return data;
};
