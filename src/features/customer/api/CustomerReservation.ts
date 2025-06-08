// CustomerReservation.ts (API 호출)
import api from "@/services/axios";
import type { ReservationReqType } from '@/features/customer/types/reservation/ReservationReqType';
import type { ReservationConfirmReqType } from '@/features/customer/types/reservation/ReservationConfirmReqType';


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