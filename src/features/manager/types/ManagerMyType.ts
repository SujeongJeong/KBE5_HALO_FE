// 매니저 나의 정보 조회
export interface ManagerInfo {
  managerId: number;
  phone: string;
  email: string;
  userName: string;
  birthDate: string;
  gender: 'MALE' | 'FEMALE';
  genderName: string;
  latitude: number;
  longitude: number;
  roadAddress: string;
  detailAddress: string;
  bio: string;
  profileImageId: number | null;
  fileId: number | null;
  status: 'ACTIVE' | 'PENDING' | 'REJECTED' | 'TERMINATION_PENDING' | string;
  statusName: string;
  availableTimes: AvailableTime[];
  contractAt: string;
  terminationReason: string;
  terminatedAt: string;
}

// 업무가능시간
export interface AvailableTime {
  dayOfWeek: string;  // ex: "MONDAY"
  time: string;       // ex: "09:00"
}