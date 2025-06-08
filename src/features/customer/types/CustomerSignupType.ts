export interface CustomerSignupReq {
  email: string;
  password: string;
  userName: string;
  birthDate: string;
  gender: 'MALE' | 'FEMALE';
  phone: string;
  roadAddress: string;
  detailAddress: string;
  latitude: number;
  longitude: number;
}
