import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { BASE_URL } from '@/api/config';
import { getUserClientSession } from '@/utils/session/getUserClientSession';
import { getUserServerSession } from '@/utils/session/getUserServerSession';

const isServer = typeof window === 'undefined';
const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(async request => {
  if (!isAccessTokenAttachedToAxiosDefaults())
    await setAccessTokenOnRequestAndAsAxiosDefaults(request);
  return request;
});

const isAccessTokenAttachedToAxiosDefaults = () => {
  const authHeader = instance.defaults.headers.common.Authorization;
  if (authHeader === null || authHeader === undefined || authHeader === '')
    return false;
  return true;
};

const setAccessTokenOnRequestAndAsAxiosDefaults = async (
  request: AxiosRequestConfig
) => {
  const session = isServer
    ? await getUserServerSession()
    : getUserClientSession();

  if (session) {
    const userSession = session.session;
    const AuthHeaderValue = `Bearer ${userSession?.user?.accessToken}`;
    if (!request.headers) request.headers = {};
    request.headers.Authorization = AuthHeaderValue;

    instance.defaults.headers.common.Authorization = AuthHeaderValue;
  }
};

instance.interceptors.response.use(
  function success(response) {
    return response;
  },
  function error(err) {
    // NOTE: 응답 오류가 있는 작업 수행
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 400:
          return Promise.reject(err);
        default:
          return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
