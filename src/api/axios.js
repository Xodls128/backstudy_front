import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/', // 백엔드 API 주소
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
