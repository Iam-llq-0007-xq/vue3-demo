import axios, { AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({
  timeout: 500000,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
  },
});

const handleError = (error: AxiosError | AxiosResponse) => {
  const isAxiosError = (err: AxiosError | AxiosResponse): err is AxiosError => {
    return (err as AxiosError).response !== undefined;
  };
  if (isAxiosError(error)) {
    // 请求失败，请稍后重试
  } else {
    console.error(error);
  }
};

instance.interceptors.request.use(
  config => {
    console.log('request ~> ', config.url);
    config.headers['authtoken'] = 'token';
    return config;
  },
  error => {
    console.log('axios error', error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    const data = response.data;
    if (data && data.error) {
      // 错误处理
      handleError(data.error);
      return Promise.reject();
    }
    return Promise.resolve(response);
  },
  error => {
    handleError(error);
    return Promise.reject(error);
  },
);

export default instance;
