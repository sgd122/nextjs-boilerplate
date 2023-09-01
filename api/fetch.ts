import { BASE_URL } from '@/api/config';

const instance = async (url: string, init?: RequestInit) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: { 'X-RapidAPI-Key': 'your-rapidapi-key' },
      next: { revalidate: 60 * 5 },
      ...init,
    });
    return res.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

export default instance;
