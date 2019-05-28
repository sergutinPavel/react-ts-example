import axios from 'axios';

export const API = (params: any) => {
  let headers: any = {
    'Content-Type': 'application/json',
  };
  if (params.headers) {
    headers = { ...params.headers };
  }
  if (localStorage.getItem('access_token')) {
    headers = {
      ...headers,
      'Authorization': `Bearer ${JSON.parse((localStorage.getItem('access_token') as string))}`,
    }
  }

  return axios({
    ...params,
    baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
    headers,
  });
};
