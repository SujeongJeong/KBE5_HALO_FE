import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { ReservationConfirmRspType } from '@/features/customer/types/CustomerReservationType';

// 체크 이모지
const CheckCircleIcon: React.FC<{ colorClass?: string }> = ({ colorClass = "text-green-100" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-16 h-16 ${colorClass}`} 
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.532-1.755-1.755a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const ReservationStepFinal: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // location.state에서 결제 완료 데이터를 가져옵니다.
  const finalReservationData = location.state as ReservationConfirmRspType;

  // 상태 관리 (필요에 따라 추가)
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // 넘어온 데이터 확인 (디버깅 용도)

    // Guard에서 이미 검증했으므로 데이터가 있다고 가정
    if (finalReservationData) {
      setDataLoaded(true);
    }
  }, [finalReservationData]);
  

  if (!dataLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>예약 정보를 불러오는 중입니다...</p>
      </div>
    );
  }

  return (
    <div className="w-full px-16 py-10 flex flex-col items-center">
      <div className="self-stretch text-center text-gray-900 text-3xl font-bold leading-loose">서비스 예약</div>

      <div className="max-w-[800px] w-full flex flex-col items-center gap-8 bg-white p-8 rounded-xl ">
      <CheckCircleIcon colorClass="text-indigo-400" /> 
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">예약이 완료되었습니다</h2>
        <p className="text-base text-gray-600 text-center mb-6">
          예약 내역은 마이페이지에서 확인하실 수 있습니다
        </p>


        {/* 하단 버튼 */}
        <div className="w-full flex justify-center gap-3 mt-4">
          <button
            onClick={() => navigate('/my/reservations')} // 마이페이지 예약 내역으로 이동
            className="w-48 h-12 bg-gray-200 rounded-lg flex justify-center items-center text-gray-700 text-base font-semibold hover:bg-gray-300"
          >
            예약 내역 확인
          </button>
          <button
            onClick={() => navigate('/')} // 홈으로 이동
            className="w-48 h-12 bg-indigo-600 rounded-lg flex justify-center items-center text-white text-base font-semibold hover:bg-indigo-700"
          >
            홈으로 이동
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationStepFinal;