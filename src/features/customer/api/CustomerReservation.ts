// CustomerReservation.ts (API 호출)
import api from "@/services/axios";
import type { ReservationReqType } from '@/features/customer/types/reservation/ReservationReqType';
import type { ReservationConfirmReqType } from '@/features/customer/types/reservation/ReservationConfirmReqType';
import type { PreCancelReqType, CustomerReservationCancelReqType, ReservationStatus } from '@/features/customer/types/CustomerReservationType';


// 서비스 카테고리 조회
export const getServiceCategories = async () => {
    const res = await api.get("/customers/reservations/categories");
    return res.data;
};

// 유저 정보 조회
export const getCustomerInfo = async () => {
    const res = await api.get("/customers/auth/my");
    return res.data;
};

// 예약 요청
export const createReservation = async (payload: ReservationReqType & {
  }) => {
    const res = await api.post("/customers/reservations", payload);
    return res.data;
  };
  
  // 예약 확정
  export const confirmReservation = async (reservationId: number,payload: ReservationConfirmReqType) => {
    const res = await api.patch(`/customers/reservations/${reservationId}/confirm`, payload);
    return res.data;
  };
  // 예약 확정 전 취소
export const cancelBeforeConfirmReservation = async (reservationId: number,payload: PreCancelReqType) => {
  const res = await api.patch(`/customers/reservations/${reservationId}/pre-cancel`, payload);
  
  if (!res.data.success) {
    if (res.data.message?.trim()) alert(res.data.message);
    throw new Error(res.data.message || "예약 취소에 실패했습니다.");
  }

  return res.data;
};

// 나의 예약 조회
export const getCustomerReservations = async (params: {
  reservationStatus?: ReservationStatus;
  page?: number;
  
}) => {
  const res = await api.get("/customers/reservations", { params });
  return res.data;
};

// 예약 확정 후 취소
export const cancelReservationByCustomer = async (reservationId: number, payload : CustomerReservationCancelReqType) => {
  const res = await api.patch(`/customers/reservations/${reservationId}/cancel`, payload);
  return res.data;
};

// 예약 상세 조회
export const getCustomerReservationDetail = async (reservationId: number) => {
  const res = await api.get(`/customers/reservations/${reservationId}`);
  return res.data;
};