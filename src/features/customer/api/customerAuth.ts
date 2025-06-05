import api from '@/services/axios';

// 수요자 로그인
export const loginCustomer = async (phone: string, password: string) => {
  const res = await api.post('/customers/auth/login', { phone, password });

  if (!res.data.success) {
    alert(res.data.message);
    // 성공 여부 수동 체크 후 에러 던지기
    throw new Error(res.data.message || '로그인에 실패했습니다.');
  }

  // 헤더에 있는 정보를 꺼내야해서 res 반환
  return res;
};

// 수요자 로그아웃
export const logoutCustomer = async () => {
  // const res = await api.post("/customers/auth/logout");
  const res = await api.post("/logout");

  if (!res.data.success) {
    // 명시적으로 실패 처리
    throw new Error(res.data.message || "로그아웃에 실패했습니다.");
  }

  return res.data.message; // or 그냥 true 반환해도 OK
};