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
    payReqDTO: {
      paymentMethod: "POINT",
      amount: number;
    }
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
    reservationCount : number;
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
    status: string;
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

// 매니저 통계 정보 타입
export interface ManagerStatisticType {
  reviewCount: number;
  reservationCount: number;
  averageRating: number;
}

// 예약 취소 정보 타입
export interface ReservationCancelType {
  cancelReason: string;
  cancelDate: string;
}

// 리뷰 정보 타입
export interface ReviewType {
  reviewId: number;
  reviewContent: string;
  reviewRating: number;
  reviewDate: string;
}

// 예약 상세 조회 (API 응답 구조에 맞게 수정)
export interface CustomerReservationDetailRspType {
  reservationId: number;
  serviceCategoryId: number;
  price: number;
  reservationStatus: ReservationStatus;
  memo: string;
  phone: string;
  serviceName: string;
  serviceTime: number;
  roadAddress: string;
  detailAddress: string;
  requestDate: string;
  startTime: string;
  turnaround: number;
  extraServices: {
    extraServiceId: number;
    extraServiceName: string;
    extraServicePrice: number;
    extraServiceTime: number;
  }[];
  managerName: string | null;
  bio: string | null;
  mangerStatistic: ManagerStatisticType; // API 응답의 오타 그대로 유지
  reservationCancel: ReservationCancelType | null;
  review: ReviewType | null;
}


// 예약 상태
export type ReservationStatus = 'PRE_CANCELED' | 'REQUESTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CONFIRMED' | 'CANCELED'| 'REJECTED';