import axios from 'axios';

const api = axios.create({
  baseURL: '/api',               // Vite 프록시 적용 전제
  withCredentials: true,         // 필요 시 쿠키 전송 허용
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;