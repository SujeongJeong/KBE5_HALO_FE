import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";

export const useRouteGuard = () => {
  const { accessToken, role, clearTokens } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    // 비로그인 사용자: public path 허용
    if (!accessToken) {
      const isPublic = [
        /^\/$/,
        /^\/auth(\/|$)/,
        /^\/managers\/auth(\/|$)/,
        /^\/admin\/auth(\/|$)/,
      ].some((regex) => regex.test(path));

      if (isPublic) {
        setAllowed(true);
      } else {
        // 경로별 분기 처리
        if (path.startsWith("/admin")) {
          navigate("/admin/auth/login", { replace: true });
        } else if (path.startsWith("/managers")) {
          navigate("/managers/auth/login", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      }
      return;
    }

    // 로그인 사용자 권한 검사
    let ok = false;
    switch (role) {
      case "CUSTOMER":
        ok = !path.startsWith("/admin") && !path.startsWith("/managers");
        break;
      case "MANAGER":
        ok = path.startsWith("/managers") && !path.startsWith("/managers/auth");
        break;
      case "ADMIN":
        ok = path.startsWith("/admin") && !path.startsWith("/admin/auth");
        break;
      default:
        ok = false;
    }

    if (ok) {
      setAllowed(true);
    } else {
      clearTokens();
      // 경로별 분기 처리
      if (path.startsWith("/admin")) {
        navigate("/admin/auth/login", { replace: true });
      } else if (path.startsWith("/managers")) {
        navigate("/managers/auth/login", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [accessToken, role, path, clearTokens, navigate]);

  return allowed;
};