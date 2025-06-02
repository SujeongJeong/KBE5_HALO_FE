import { Fragment } from "react/jsx-runtime";

export const ManagerInquiries = () => {
  return (
    <Fragment>
      <div className="flex-1 self-stretch h-[968px] inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center">
          <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">문의사항</div>
          <div className="h-10 px-4 bg-indigo-600 rounded-md flex justify-center items-center gap-2">
            <span className="material-symbols-outlined text-white">add</span>
            <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-none">문의사항 등록</div>
          </div>
        </div>
        <div className="self-stretch p-6 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch p-6 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">검색 조건</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">등록일</div>
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
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">답변 상태</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">전체</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">제목</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">제목 검색</div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">내용</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">내용 검색</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-end items-center gap-2">
                <div className="w-28 h-12 bg-slate-100 rounded-lg flex justify-center items-center">
                  <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">초기화</div>
                </div>
                <div className="w-28 h-12 bg-indigo-600 rounded-lg flex justify-center items-center">
                  <div className="justify-start text-white text-sm font-medium font-['Inter'] leading-none">검색</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch p-6 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="justify-start text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">문의사항 내역</div>
              <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">총 12건</div>
            </div>
            <div className="self-stretch h-12 px-4 bg-slate-50 border-b border-slate-200 inline-flex justify-start items-center">
              <div className="flex-1 flex justify-center items-center">
                <div className="flex-1 flex justify-center items-center">
                  <div className="flex-1 flex justify-center items-center gap-4">
                    <div className="w-14 text-center justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">번호</div>
                    <div className="w-[578px] text-center justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">제목</div>
                    <div className="w-56 text-center justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">작성일</div>
                    <div className="w-32 text-center justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">답변 상태</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-16 px-4 border-b border-slate-200 inline-flex justify-center items-center gap-4">
              <div className="w-14 text-center justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">12</div>
              <div className="w-[578px] h-3 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">서비스 이용 시간 변경 문의</div>
              <div className="w-56 text-center justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">2023-05-14</div>
              <div className="w-32 flex justify-center items-center">
                <div className="h-7 px-3 bg-yellow-100 rounded-2xl flex justify-center items-center">
                  <div className="text-center justify-start text-yellow-800 text-sm font-medium font-['Inter'] leading-none">답변 대기</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-16 px-4 border-b border-slate-200 inline-flex justify-center items-center gap-4">
              <div className="w-14 text-center justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">12</div>
              <div className="w-[578px] h-3 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">서비스 이용 시간 변경 문의</div>
              <div className="w-56 text-center justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">2023-05-14</div>
              <div className="w-32 flex justify-center items-center">
                <div className="h-7 px-3 bg-yellow-100 rounded-2xl flex justify-center items-center">
                  <div className="text-center justify-start text-yellow-800 text-sm font-medium font-['Inter'] leading-none">답변 대기</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-16 px-4 border-b border-slate-200 inline-flex justify-center items-center gap-4">
              <div className="w-14 text-center justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">12</div>
              <div className="w-[578px] h-3 justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">서비스 이용 시간 변경 문의</div>
              <div className="w-56 text-center justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">2023-05-14</div>
              <div className="w-32 flex justify-center items-center">
                <div className="h-7 px-3 bg-green-100 rounded-2xl flex justify-center items-center">
                  <div className="justify-start text-green-800 text-sm font-medium font-['Inter'] leading-none">답변 완료</div>
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-center items-center gap-1">
              <div className="w-8 h-8 bg-slate-100 rounded-md flex justify-center items-center">
                <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">이전</div>
              </div>
              <div className="w-8 h-8 bg-indigo-600 rounded-md flex justify-center items-center">
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