import api from '@/services/axios';

export const loginAdmin = async (email: string, password: string) => {
  const res = await api.post('/admins/auth/login', { email, password });
  return res.data;
};