import { Fragment, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { requestTermination } from "@/features/manager/api/managerMy";
import { isValidLength } from "@/shared/utils/validation";

export const ManagerContractCancel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { contractAt, statusName } = location.state || {};
  const [terminationReason, setTerminationReason] = useState('');
  const [agreed, setAgreed] = useState(false);

  // 매니저 계약 해지 요청
  const handleSubmit = async () => {
    if (!isValidLength(terminationReason, 1, 500)) {
      alert("해지 사유는 필수 입력 항목이며, 500자 이하로 입력해주세요.");
      return;
    }
    if (!agreed) {
      alert("계약 해지 약관에 동의해주세요.");
      return;
    }

    try {
      await requestTermination(terminationReason);
      navigate("/managers/my");  // 마이페이지로 이동
    } catch (err: any) {
      alert(err.message || "계약 해지 요청 실패");
    }
  };

  return (
    <Fragment>
      <div className="w-full self-stretch inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center">
          <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">계약 해지 요청</div>
          <Link 
              to="/managers/my"
              className="h-10 px-4 flex justify-center items-center border rounded-md text-sm text-gray-500 hover:bg-gray-100">취소</Link>
        </div>
        <div className="self-stretch p-6 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch p-8 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-6">
            <div className="self-stretch p-4 bg-red-50 rounded-lg inline-flex justify-start items-center gap-1">
              <span className="material-symbols-outlined text-red-700">error</span>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                <div className="self-stretch justify-start text-red-700 text-base font-semibold font-['Inter'] leading-tight">주의: 계약 해지는 되돌릴 수 없습니다</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch justify-start text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">계약 정보</div>
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="w-40 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">계약 시작일</div>
                <div className="flex-1 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">{ contractAt }</div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="w-40 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">계약 상태</div>
                <div className="h-7 px-3 bg-green-100 rounded-2xl flex justify-center items-center">
                  <div className="justify-start text-green-800 text-sm font-medium font-['Inter'] leading-none">{ statusName }</div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="w-40 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">남은 예약</div>
                <div className="flex-1 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">3건</div>
              </div>
            </div>
            {/* 해지 사유 */}
            <div className="self-stretch flex flex-col gap-2">
              <div className="self-stretch justify-start text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">해지 사유</div>
              <textarea
                value={terminationReason}
                onChange={(e) => setTerminationReason(e.target.value)}
                placeholder="해지 사유를 입력해주세요"
                className="self-stretch h-28 px-4 py-3 bg-slate-50 rounded-lg outline outline-1 outline-slate-200 resize-none text-sm text-slate-700"
              />
            </div>
            {/* 체크박스 */}
            <div className="self-stretch flex items-center gap-2">
              <input
                id="agreement"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="agreement" className="text-slate-700 text-sm">계약 해지에 따른 모든 조건을 이해하고 동의합니다</label>
            </div>
            {/* 제출 버튼 */}
            <div className="self-stretch inline-flex justify-end items-center gap-3">
              <button 
                onClick={handleSubmit}
                className="w-40 h-12 bg-red-500 rounded-lg flex justify-center items-center hover:bg-red-600 cursor-pointer">
                <div className="justify-start text-white text-sm font-medium font-['Inter'] leading-none">계약 해지 요청</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}