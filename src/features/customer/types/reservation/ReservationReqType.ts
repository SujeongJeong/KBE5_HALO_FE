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
  