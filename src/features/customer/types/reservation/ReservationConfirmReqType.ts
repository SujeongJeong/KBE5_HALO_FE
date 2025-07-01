export interface ReservationConfirmReqType {
    payReqDTO: ReservationPayReqType;
    selectedManagerId: number;
  }


  export interface ReservationPayReqType {
    paymentMethod: "POINT";
    amount: number;
  }
  