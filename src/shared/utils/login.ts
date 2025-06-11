import { loginCustomer } from "@/features/customer/api/customerAuth";
import { loginManager } from "@/features/manager/api/managerAuth";
import { loginAdmin } from "@/features/admin/api/adminAuth";

import { useAuthStore } from "@/store/useAuthStore";
import { useUserStore } from "@/store/useUserStore";

type Role = "CUSTOMER" | "MANAGER" | "ADMIN";

export const login = async (
  role: Role,
  phone: string,
  password: string
) => {
  let res;

  switch (role) {
    case "CUSTOMER":
      res = await loginCustomer(phone, password);
      break;
    case "MANAGER":
      res = await loginManager(phone, password);
      break;
    case "ADMIN":
      res = await loginAdmin(phone, password);
      break;
    default:
      throw new Error("알 수 없는 사용자 역할");
  }

  // 응답 헤더에서 값 추출 (헤더 이름은 소문자로)
  const rawHeader = res.headers["authorization"];
  const accessToken = rawHeader?.replace("Bearer ", "").trim();
  const userName = res.data.body.userName;
  const status = res.data.body.status;

  if (!accessToken || !userName) {
    throw new Error("로그인 응답이 올바르지 않습니다.");
  }

  // 상태 저장
  useAuthStore.getState().setTokens(accessToken, role);
  useUserStore.getState().setUser(phone, userName, status);

  return { accessToken, userName };
};