// 서비스 카테고리 트리 타입
export interface ServiceCategoryTreeType {
    serviceId: number;
    serviceName: string;
    serviceTime: number | null;
    depth: number;
    price: number;
    description: string;
    children: ServiceCategoryTreeType[];
  }
  
  // 예약 정보 타입
  export interface ReservationRspType {
    reservationId: number;
    serviceCategoryId: number;
    roadAddress: string;
    detailAddress: string;
    latitude: number;
    longitude: number;
    requestDate: string; // ISO 날짜 문자열 (예: "2025-06-09")
    startTime: string;   // "HH:mm" 또는 "HH:mm:ss" 형식 문자열
    turnaround: number;
    price: number;
    memo: string;
  }
  
  // 예약 요청 타입
  export interface ReservationReqType {
    mainServiceId: number;
    additionalServiceIds: number[];
    phone: string;
    roadAddress: string;
    detailAddress: string;
    latitude: number;
    longitude: number;
    requestDate: string;
    startTime: string;
    turnaround: number;
    price: number;
    memo: string;
  }
  
  // 예약 확정 응답 타입
  export interface ReservationConfirmRspType {
    reservationId: number;
    managerName: string;
    reservationStatus: string;
    serviceName: string;
    requestDate: string;
    startTime: string;
    turnaround: number;
    roadAddress: string;
    detailAddress: string;
    extraServices : ServiceCategoryTreeType
    price: number;
}
  
  // 예약 확정 요청 타입
export interface ReservationConfirmReqType {
    selectedManagerId: number;
    matchedManagerIds: number[];
  }

// 예약 매칭 응답 타입
export interface ReservationMatchedRspType {
reservation: ReservationRspType;
requestCategory: ServiceCategoryTreeType;
matchedManagers: ManagerMatchingRspType[];
}

// 매니저 매칭 응답 타입
export interface ManagerMatchingRspType {
    managerId: number;
    managerName: string;
    averageRating: number;
    reviewCount: number;
    profileImageId: number;
    bio: string;
    feedbackType: 'GOOD' | 'BAD' | null; // enum 값에 맞게 조정
    recentReservationDate: string; // ISO 날짜 문자열
  }

// 예약 확정 전 취소 요청 타입
export interface PreCancelReqType {
   matchedManagers: number[];
  }

// 예약 확정 후 취소 요청 타입
export interface CustomerReservationCancelReqType{
    reservationId: number;
    cancelReason: string;
}

// 예약 목록 조회
export interface CustomerReservationListRspType {
    reservationId: number;
    managerName?: string;
    reservationStatus: string;
    serviceCategoryId: number;
    serviceName: string;
    requestDate: string;
    startTime: string;
    roadAddress: string;
    detailAddress: string;
    turnaround: number;
    price: number;
    reviewId?: number;
}

// 예약 상세 조회
export interface CustomerReservationDetailRspType {
  reservationId: number;
  phone: string;
  roadAddress: string;
  detailAddress: string;
  reservationStatus: ReservationStatus;
  requestDate: string;
  startTime: string;
  turnaround: number;
  totalPrice: number;
  serviceId: number;
  serviceName: string;
  memo: string;
  serviceTime: number;
  extraServices: {
    extraServiceId: number;
    extraServiceName: string;
    extraServicePrice: number;
    extraServiceTime: number;
  }[];
  managerName: string | null;
  bio: string | null;
  averageRating: number;
  reviewCount: number;
  cancelReason: string | null;
  cancelDate: string | null;
  reviewId: number | null;
  reviewContent: string | null;
  reviewRating: number | null;
  reviewDate: string | null;
}

// 예약 상태
export type ReservationStatus = 'PRE_CANCELED' | 'REQUESTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CONFIRMED' | 'CANCELED'| 'REJECTED';