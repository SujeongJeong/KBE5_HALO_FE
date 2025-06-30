// 로그인 상태
export interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

// 사용자 정보
export interface UserInfo {
  id: number;
  name: string;
  phone: string;
  role: 'CUSTOMER' | 'MANAGER' | 'ADMIN';
}

// JWT 토큰
export interface AuthToken {
  accessToken: string;
}

// 로그인 요청 DTO
export interface LoginRequest {
  phone: string;
  password: string;
}

// 로그인 응답 DTO
export interface LoginResponse {
  user: UserInfo;
  token: AuthToken;
}