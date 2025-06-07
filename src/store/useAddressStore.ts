import { create } from 'zustand';


interface AddressState {
  roadAddress: string;
  latitude: number | null;
  longitude: number | null;
  detailAddress: string;
  setAddress: (roadAddress: string, lat: number, lng: number, detailAddressParam: string) => void;
}

export const useAddressStore = create<AddressState>((set) => ({
  roadAddress: '',
  latitude: null,
  longitude: null,
  detailAddress: '',
  setAddress: (roadAddress, lat, lng, detailAddressParam) =>
    set({
      roadAddress,
      latitude: lat,
      longitude: lng,
      detailAddress: detailAddressParam,
    }),
}));