import { Fragment } from "react";

export const AdminMain = () => {

  return (
    <Fragment>
      <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-start items-center">
          <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">대시보드</div>
        </div>
        <div className="self-stretch flex-1 p-6 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-start items-start gap-4">
              <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">이번주 총 예약 건수</div>
                <div className="justify-start text-gray-900 text-2xl font-bold font-['Inter'] leading-7">248</div>
                <div className="inline-flex justify-start items-center gap-1">
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-2.5 h-[5px] left-[5px] top-[5px] absolute bg-emerald-500" />
                  </div>
                  <div className="justify-start text-emerald-500 text-xs font-medium font-['Inter'] leading-none">12% 증가</div>
                </div>
              </div>
              <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">완료된 예약 건수</div>
                <div className="justify-start text-gray-900 text-2xl font-bold font-['Inter'] leading-7">186</div>
                <div className="inline-flex justify-start items-center gap-1">
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-2.5 h-[5px] left-[5px] top-[5px] absolute bg-emerald-500" />
                  </div>
                  <div className="justify-start text-emerald-500 text-xs font-medium font-['Inter'] leading-none">8% 증가</div>
                </div>
              </div>
              <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">오늘의 예약 건수</div>
                <div className="justify-start text-gray-900 text-2xl font-bold font-['Inter'] leading-7">24</div>
                <div className="px-2 py-0.5 bg-violet-50 rounded-xl inline-flex justify-center items-center">
                  <div className="justify-start text-indigo-600 text-xs font-medium font-['Inter'] leading-none">+12%</div>
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-4">
              <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">매출 요약</div>
                <div className="justify-start text-gray-900 text-2xl font-bold font-['Inter'] leading-7">₩4,862,500</div>
                <div className="inline-flex justify-start items-center gap-1">
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-2.5 h-[5px] left-[5px] top-[5px] absolute bg-emerald-500" />
                  </div>
                  <div className="justify-start text-emerald-500 text-xs font-medium font-['Inter'] leading-none">15% 증가</div>
                </div>
              </div>
              <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">신규 매니저 신청 수</div>
                <div className="justify-start text-indigo-600 text-2xl font-bold font-['Inter'] leading-7">18</div>
                <div className="px-2 py-0.5 bg-violet-50 rounded-xl inline-flex justify-center items-center">
                  <div className="justify-start text-indigo-600 text-xs font-medium font-['Inter'] leading-none">확인 필요</div>
                </div>
              </div>
              <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">새로 등록된 문의글 수</div>
                <div className="justify-start text-indigo-600 text-2xl font-bold font-['Inter'] leading-7">24</div>
                <div className="px-2 py-0.5 bg-violet-50 rounded-xl inline-flex justify-center items-center">
                  <div className="justify-start text-indigo-600 text-xs font-medium font-['Inter'] leading-none">답변 필요</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="justify-start text-gray-900 text-base font-semibold font-['Inter'] leading-tight">오늘의 스케줄</div>
              <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">2023년 5월 15일 월요일</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch p-3 bg-gray-50 rounded-lg inline-flex justify-between items-center">
                <div className="flex justify-start items-center gap-3">
                  <div className="px-2 py-1 bg-indigo-100 rounded flex justify-center items-center">
                    <div className="justify-start text-indigo-600 text-xs font-medium font-['Inter'] leading-none">09:00 - 12:00</div>
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-0.5">
                    <div className="justify-start text-gray-900 text-sm font-semibold font-['Inter'] leading-none">홍길동 고객 방문 청소</div>
                    <div className="justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-none">서울시 강남구 테헤란로 123</div>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <div className="h-8 px-3 bg-indigo-600 rounded-md flex justify-center items-center">
                    <div className="justify-start text-white text-xs font-medium font-['Inter'] leading-none">확인</div>
                  </div>
                  <div className="h-8 px-3 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
                    <div className="justify-start text-gray-500 text-xs font-medium font-['Inter'] leading-none">취소하기</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch p-3 bg-gray-50 rounded-lg inline-flex justify-between items-center">
                <div className="flex justify-start items-center gap-3">
                  <div className="px-2 py-1 bg-indigo-100 rounded flex justify-center items-center">
                    <div className="justify-start text-indigo-600 text-xs font-medium font-['Inter'] leading-none">14:00 - 17:00</div>
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-0.5">
                    <div className="justify-start text-gray-900 text-sm font-semibold font-['Inter'] leading-none">김철수 고객 방문 청소</div>
                    <div className="justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-none">서울시 서초구 서초대로 456</div>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <div className="h-8 px-3 bg-indigo-600 rounded-md flex justify-center items-center">
                    <div className="justify-start text-white text-xs font-medium font-['Inter'] leading-none">확인</div>
                  </div>
                  <div className="h-8 px-3 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
                    <div className="justify-start text-gray-500 text-xs font-medium font-['Inter'] leading-none">취소하기</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-6">
            <div className="flex-1 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="justify-start text-gray-900 text-base font-semibold font-['Inter'] leading-tight">신규 매니저 신청</div>
                <div className="flex justify-start items-center gap-1">
                  <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">전체보기</div>
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-1 h-2 left-[7px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-indigo-600" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch p-3 bg-gray-50 rounded-lg inline-flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-[20px] inline-flex flex-col justify-center items-center">
                      <div className="justify-start text-indigo-600 text-sm font-semibold font-['Inter'] leading-none">KM</div>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-0.5">
                      <div className="justify-start text-gray-900 text-sm font-semibold font-['Inter'] leading-none">김민수</div>
                      <div className="justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-none">2023-06-15 신청</div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="h-8 px-3 bg-indigo-600 rounded-md flex justify-center items-center">
                      <div className="justify-start text-white text-xs font-medium font-['Inter'] leading-none">승인</div>
                    </div>
                    <div className="h-8 px-3 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
                      <div className="justify-start text-gray-500 text-xs font-medium font-['Inter'] leading-none">거절</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch p-3 bg-gray-50 rounded-lg inline-flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-[20px] inline-flex flex-col justify-center items-center">
                      <div className="justify-start text-indigo-600 text-sm font-semibold font-['Inter'] leading-none">LJ</div>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-0.5">
                      <div className="justify-start text-gray-900 text-sm font-semibold font-['Inter'] leading-none">이지연</div>
                      <div className="justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-none">2023-06-14 신청</div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="h-8 px-3 bg-indigo-600 rounded-md flex justify-center items-center">
                      <div className="justify-start text-white text-xs font-medium font-['Inter'] leading-none">승인</div>
                    </div>
                    <div className="h-8 px-3 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
                      <div className="justify-start text-gray-500 text-xs font-medium font-['Inter'] leading-none">거절</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="justify-start text-gray-900 text-base font-semibold font-['Inter'] leading-tight">답변이 필요한 문의사항</div>
                <div className="flex justify-start items-center gap-1">
                  <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">전체보기</div>
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-1 h-2 left-[7px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-indigo-600" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch p-3 bg-gray-50 rounded-lg inline-flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <div className="px-2 py-0.5 bg-amber-100 rounded-xl flex justify-center items-center">
                      <div className="justify-start text-amber-600 text-xs font-medium font-['Inter'] leading-none">고객</div>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-0.5">
                      <div className="justify-start text-gray-900 text-sm font-semibold font-['Inter'] leading-none">예약 취소 관련 문의</div>
                      <div className="justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-none">2023-06-15 18:42</div>
                    </div>
                  </div>
                  <div className="h-8 px-3 bg-indigo-600 rounded-md flex justify-center items-center">
                    <div className="justify-start text-white text-xs font-medium font-['Inter'] leading-none">답변하기</div>
                  </div>
                </div>
                <div className="self-stretch p-3 bg-gray-50 rounded-lg inline-flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <div className="px-2 py-0.5 bg-indigo-100 rounded-xl flex justify-center items-center">
                      <div className="justify-start text-indigo-600 text-xs font-medium font-['Inter'] leading-none">매니저</div>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-0.5">
                      <div className="justify-start text-gray-900 text-sm font-semibold font-['Inter'] leading-none">서비스 일정 변경 요청</div>
                      <div className="justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-none">2023-06-15 16:30</div>
                    </div>
                  </div>
                  <div className="h-8 px-3 bg-indigo-600 rounded-md flex justify-center items-center">
                    <div className="justify-start text-white text-xs font-medium font-['Inter'] leading-none">답변하기</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};