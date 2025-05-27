import { loginCustomer } from "@/features/customer/api/customerAuth";
import { loginManager } from "@/features/manager/api/managerAuth";
import { loginAdmin } from "@/features/admin/api/adminAuth";

import { useAuthStore } from "@/store/useAuthStore";
import { useUserStore } from "@/store/useUserStore";

type Role = "CUSTOMER" | "MANAGER" | "ADMIN";

export const login = async (
  role: Role,
  email: string,
  password: string
) => {
  let data;
  switch (role) {
    case "CUSTOMER":
      data = await loginCustomer(email, password);
      break;
    case "MANAGER":
      data = await loginManager(email, password);
      break;
    case "ADMIN":
      data = await loginAdmin(email, password);
      break;
    default:
      throw new Error("알 수 없는 사용자 역할");
  }

  const { accessToken, refreshToken, username } = data;

  useAuthStore.getState().setTokens(accessToken, refreshToken, role);
  useUserStore.getState().setUser(email, username);

  return data;
};