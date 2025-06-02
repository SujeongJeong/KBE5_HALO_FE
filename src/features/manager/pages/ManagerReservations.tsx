import { Fragment } from "react/jsx-runtime";

export const ManagerReservations = () => {
  return (
    <Fragment>
      <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-start items-center">
          <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">예약 관리</div>
        </div>
        <div className="self-stretch p-6 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch p-6 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">검색 조건</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">예약 날짜</div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="flex-1 h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-center">
                      <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">시작일</div>
                    </div>
                    <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">~</div>
                    <div className="flex-1 h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-center">
                      <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">종료일</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">예약 상태</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">전체</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">고객명</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">고객명 입력</div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">주소</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">주소 입력</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-end items-center gap-2">
                <div className="w-28 h-12 bg-slate-100 rounded-lg flex justify-center items-center">
                  <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">초기화</div>
                </div>
                <div className="w-28 h-12 bg-blue-500 rounded-lg flex justify-center items-center">
                  <div className="justify-start text-white text-sm font-medium font-['Inter'] leading-none">검색</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch p-6 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="justify-start text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">예약 내역</div>
              <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">총 24건</div>
            </div>
            <div className="self-stretch h-12 px-4 bg-slate-50 border-b border-slate-200 inline-flex justify-start items-center">
              <div className="w-20 justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">예약번호</div>
              <div className="w-28 justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">예약일시</div>
              <div className="w-24 justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">고객명</div>
              <div className="flex-1 justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">주소</div>
              <div className="w-24 justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">서비스</div>
              <div className="w-24 justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">상태</div>
              <div className="w-20 justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">상세</div>
            </div>
            <div className="self-stretch h-16 px-4 border-b border-slate-200 inline-flex justify-start items-center">
              <div className="w-20 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">R230515</div>
              <div className="w-28 inline-flex flex-col justify-center items-start">
                <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">2023-05-15</div>
                <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">09:00-12:00</div>
              </div>
              <div className="w-24 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">김철수</div>
              <div className="flex-1 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">서울시 강남구 테헤란로 123</div>
              <div className="w-24 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">청소</div>
              <div className="w-24 flex justify-start items-center">
                <div className="h-7 px-3 bg-green-100 rounded-2xl flex justify-center items-center">
                  <div className="justify-start text-green-800 text-sm font-medium font-['Inter'] leading-none">완료</div>
                </div>
              </div>
              <div className="w-20 flex justify-center items-center">
                <div className="w-14 h-8 bg-slate-100 rounded-md flex justify-center items-center">
                  <div className="justify-start text-blue-500 text-sm font-medium font-['Inter'] leading-none">보기</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-16 px-4 border-b border-slate-200 inline-flex justify-start items-center">
              <div className="w-20 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">R230515</div>
              <div className="w-28 inline-flex flex-col justify-center items-start">
                <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">2023-05-15</div>
                <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">14:00-17:00</div>
              </div>
              <div className="w-24 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">이영희</div>
              <div className="flex-1 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">서울시 서초구 서초대로 456</div>
              <div className="w-24 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">청소</div>
              <div className="w-24 flex justify-start items-center">
                <div className="h-7 px-3 bg-yellow-100 rounded-2xl flex justify-center items-center">
                  <div className="justify-start text-yellow-800 text-sm font-medium font-['Inter'] leading-none">진행중</div>
                </div>
              </div>
              <div className="w-20 flex justify-center items-center">
                <div className="w-14 h-8 bg-slate-100 rounded-md flex justify-center items-center">
                  <div className="justify-start text-blue-500 text-sm font-medium font-['Inter'] leading-none">보기</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-16 px-4 border-b border-slate-200 inline-flex justify-start items-center">
              <div className="w-20 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">R230516</div>
              <div className="w-28 inline-flex flex-col justify-center items-start">
                <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">2023-05-16</div>
                <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">10:00-13:00</div>
              </div>
              <div className="w-24 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">박지민</div>
              <div className="flex-1 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">서울시 송파구 올림픽로 789</div>
              <div className="w-24 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">청소</div>
              <div className="w-24 flex justify-start items-center">
                <div className="h-7 px-3 bg-sky-100 rounded-2xl flex justify-center items-center">
                  <div className="justify-start text-sky-900 text-sm font-medium font-['Inter'] leading-none">예정</div>
                </div>
              </div>
              <div className="w-20 flex justify-center items-center">
                <div className="w-14 h-8 bg-slate-100 rounded-md flex justify-center items-center">
                  <div className="justify-start text-blue-500 text-sm font-medium font-['Inter'] leading-none">보기</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-16 px-4 inline-flex justify-start items-center">
              <div className="w-20 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">R230518</div>
              <div className="w-28 inline-flex flex-col justify-center items-start">
                <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">2023-05-18</div>
                <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">13:00-16:00</div>
              </div>
              <div className="w-24 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">최민수</div>
              <div className="flex-1 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">서울시 강남구 삼성로 321</div>
              <div className="w-24 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">청소</div>
              <div className="w-24 flex justify-start items-center">
                <div className="h-7 px-3 bg-sky-100 rounded-2xl flex justify-center items-center">
                  <div className="justify-start text-sky-900 text-sm font-medium font-['Inter'] leading-none">예정</div>
                </div>
              </div>
              <div className="w-20 flex justify-center items-center">
                <div className="w-14 h-8 bg-slate-100 rounded-md flex justify-center items-center">
                  <div className="justify-start text-blue-500 text-sm font-medium font-['Inter'] leading-none">보기</div>
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-center items-center gap-1">
              <div className="w-8 h-8 bg-slate-100 rounded-md flex justify-center items-center">
                <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">이전</div>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-md flex justify-center items-center">
                <div className="justify-start text-white text-sm font-medium font-['Inter'] leading-none">1</div>
              </div>
              <div className="w-8 h-8 bg-slate-100 rounded-md flex justify-center items-center">
                <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">2</div>
              </div>
              <div className="w-8 h-8 bg-slate-100 rounded-md flex justify-center items-center">
                <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">3</div>
              </div>
              <div className="w-8 h-8 bg-slate-100 rounded-md flex justify-center items-center">
                <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">다음</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};