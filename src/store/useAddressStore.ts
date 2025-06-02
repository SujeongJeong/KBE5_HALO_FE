import { create } from 'zustand';

interface AddressState {
  address: string;
  latitude: number | null;
  longitude: number | null;
  detailAddress: string;
  setAddress: (address: string, lat: number, lng: number, detail: string) => void;
}

export const useAddressStore = create<AddressState>((set) => ({
  address: '',
  latitude: null,
  longitude: null,
  detailAddress: '',
  setAddress: (address, lat, lng, detail) =>
    set({ address, latitude: lat, longitude: lng, detailAddress: detail }),
}));