import type { ReservationRspType } from '@/features/customer/types/reservation/ReservationRspType';
import type { ServiceCategoryTreeType } from '@/features/customer/types/reservation/ServiceCategoryTreeType';
import type { ManagerMatchingRspType } from '@/features/customer/types/CustomerReservationType';

export interface ReservationMatchedRspType {
  reservation: ReservationRspType;
  requestCategory: ServiceCategoryTreeType;
  matchedManagers: ManagerMatchingRspType[];
}
