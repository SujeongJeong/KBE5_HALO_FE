import { useAuthStore } from "@/store/useAuthStore";
import api from "@/services/axios";


export const reissueToken = async () => {
  const { refreshToken, role } = useAuthStore.getState();

  if (!refreshToken || !role) {
    throw new Error("리프레시 토큰 또는 역할 정보가 없습니다.");
  }

  const userType = role.toLowerCase();

  const res = await api.post(`/${userType}/auth/refresh-access-token`, {
    refresh_token: refreshToken,
  });

  if (!res.data.success) {
    throw new Error(res.data.message || "토큰 재발급 실패");
  }

  return res.data.body;
};