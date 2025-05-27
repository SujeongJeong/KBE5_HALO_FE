import api from '@/services/axios';

export const loginCustomer = async (email: string, password: string) => {
  const res = await api.post('/customers/auth/login', { email, password });

  if (!res.data.success) {
    // 성공 여부 수동 체크 후 에러 던지기
    throw new Error(res.data.message || '로그인에 실패했습니다.');
  }

  return res.data.body; // 성공 시 실제 응답 데이터(body)만 반환
};