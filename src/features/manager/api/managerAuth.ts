import api from '@/services/axios';

export const loginManager = async (email: string, password: string) => {
  const res = await api.post('/managers/auth/login', { email, password });
  return res.data;
};