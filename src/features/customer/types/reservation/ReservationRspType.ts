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
