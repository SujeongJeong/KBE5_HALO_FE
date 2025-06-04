import { useEffect, useRef, useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { useAddressStore } from '@/store/useAddressStore';

const libraries = ['places'];

const AddressSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [detailAddress, setDetailAddress] = useState('');

  const { setAddress } = useAddressStore();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: libraries as any,
  });

  useEffect(() => {
    if (isLoaded && inputRef.current && !autocompleteRef.current) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current);

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current!.getPlace();

        if (!place.geometry || !place.formatted_address) {
          alert('자동완성 목록에서 주소를 선택해주세요.');
          return;
        }

        const lat = place.geometry.location?.lat() ?? 0;
        const lng = place.geometry.location?.lng() ?? 0;

        setAddress(place.formatted_address, lat, lng, detailAddress);

        console.log('도로명주소:', place.formatted_address);
        console.log('위도:', lat);
        console.log('경도:', lng);
      });
    }
  }, [isLoaded, detailAddress, setAddress]);

  return isLoaded ? (
    <div className="self-stretch flex flex-col justify-start items-start gap-2">
      <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">주소 *</div>

      {/* 도로명주소 자동완성 입력창 */}
      <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="도로명주소"
          className="w-full bg-transparent text-slate-700 text-sm font-normal outline-none"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              e.stopPropagation(); // 엔터 이벤트 막기
            }
          }}
        />
      </div>

      {/* 상세주소 수동입력 */}
      <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
        <input
          type="text"
          placeholder="상세주소"
          value={detailAddress}
          onChange={(e) => setDetailAddress(e.target.value)}
          className="w-full bg-transparent text-slate-700 text-sm font-normal outline-none"
        />
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-500"></div>
    </div>
  );
};

export default AddressSearch;
