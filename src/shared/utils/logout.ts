import { useAuthStore } from "@/store/useAuthStore";
import { useUserStore } from "@/store/useUserStore";

import { logoutCustomer } from "@/features/customer/api/customerAuth";
import { logoutManager } from "@/features/manager/api/managerAuth";
import { logoutAdmin } from "@/features/admin/api/adminAuth";

export const logout = async () => {
  const role = useAuthStore.getState().role;

  try {
    switch (role) {
      case "CUSTOMER":
        await logoutCustomer();
        break;
      case "MANAGER":
        await logoutManager();
        break;
      case "ADMIN":
        await logoutAdmin();
        break;
      default:
        throw new Error("알 수 없는 사용자 역할");
    }
  } catch (err) {
    console.warn("서버 로그아웃 실패 (무시하고 클라이언트 초기화 진행)", err);
  } finally {
    useAuthStore.getState().clearTokens();
    useUserStore.getState().clearUser();
  }
};