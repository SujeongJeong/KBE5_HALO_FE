import api from '@/services/axios';
import { useAuthStore } from '@/store/useAuthStore';

// 매니저 로그인
export const loginManager = async (email: string, password: string) => {
  const res = await api.post('/managers/auth/login', { email, password });

  if (!res.data.success) {
    // 성공 여부 수동 체크 후 에러 던지기
    throw new Error(res.data.message || '로그인에 실패했습니다.');
  }

  return res.data.body; // 성공 시 실제 응답 데이터(body)만 반환
};

// 매니저 로그아웃
export const logoutManager = async () => {
  const refreshToken = useAuthStore.getState().refreshToken;

  const res = await api.post("/managers/auth/logout", { refreshToken });

  if (!res.data.success) {
    // 명시적으로 실패 처리
    throw new Error(res.data.message || "로그아웃에 실패했습니다.");
  }

  return res.data.message; // or 그냥 true 반환해도 OK
};