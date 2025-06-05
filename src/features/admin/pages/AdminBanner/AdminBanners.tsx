import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export const AdminBanners = () => {
  const [nameKeyword, setNameKeyword] = useState('');
  const [phoneKeyword, setPhoneKeyword] = useState('');

  return (
    <Fragment>
      <div className="w-full self-stretch inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center">
          <div className="text-gray-900 text-xl font-bold font-['Inter'] leading-normal">배너 관리</div>
          <Link
            to="/admin/banners/new"
            className="h-10 px-4 bg-indigo-600 rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-indigo-700 transition"
          >
            <span className="material-symbols-outlined text-white">add</span>
            <span className="text-white text-sm font-semibold font-['Inter'] leading-none">배너 등록</span>
          </Link>
        </div>

        <div className="self-stretch flex-1 p-6 flex flex-col justify-start items-start gap-6">
          {/* 검색 폼 */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full p-6 bg-white rounded-xl shadow flex flex-col gap-4"
          >
            <div className="text-slate-800 text-lg font-semibold">검색 조건</div>
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-slate-700 text-sm font-medium">이름</label>
                <div className="h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-slate-200 flex items-center">
                  <input
                    type="text"
                    placeholder="이름 입력"
                    value={nameKeyword}
                    onChange={(e) => setNameKeyword(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-slate-700 text-sm font-medium">연락처</label>
                <div className="h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-slate-200 flex items-center">
                  <input
                    type="text"
                    placeholder="연락처 입력"
                    value={phoneKeyword}
                    onChange={(e) => setPhoneKeyword(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="w-28 h-12 bg-slate-100 rounded-lg text-slate-500 text-sm font-medium hover:bg-slate-200 cursor-pointer"
              >
                초기화
              </button>
              <button
                type="submit"
                className="w-28 h-12 bg-indigo-600 rounded-lg text-white text-sm font-medium hover:bg-indigo-700 cursor-pointer"
              >
                검색
              </button>
            </div>
          </form>

          {/* 목록 */}
          <div className="self-stretch bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start">
            <div className="self-stretch h-12 px-6 bg-gray-50 border-b border-gray-200 flex items-center">
              <div className="w-[10%] flex justify-center items-center text-gray-700 text-sm font-semibold font-['Inter']">ID</div>
              <div className="w-[30%] flex justify-center items-center text-gray-700 text-sm font-semibold font-['Inter']">배너명</div>
              <div className="w-[15%] flex justify-center items-center text-gray-700 text-sm font-semibold font-['Inter']">상태</div>
              <div className="w-[25%] flex justify-center items-center text-gray-700 text-sm font-semibold font-['Inter']">노출 기간</div>
              <div className="w-[20%] flex justify-center items-center text-gray-700 text-sm font-semibold font-['Inter']">관리</div>
            </div>

            {[{
              id: 'BN001', name: '여름 특별 할인 프로모션', status: '활성', period: '2023-06-01 ~ 2023-06-30', statusColor: 'emerald'
            }, {
              id: 'BN002', name: '신규 회원 가입 혜택', status: '활성', period: '2023-05-15 ~ 2023-07-15', statusColor: 'emerald'
            }, {
              id: 'BN003', name: '추석 연휴 서비스 안내', status: '대기중', period: '2023-09-01 ~ 2023-09-30', statusColor: 'amber'
            }, {
              id: 'BN004', name: '봄맞이 대청소 이벤트', status: '종료', period: '2023-03-01 ~ 2023-04-30', statusColor: 'gray'
            }].map((item) => (
              <div key={item.id} className="self-stretch h-16 px-6 border-b border-gray-200 flex items-center">
                <div className="w-[10%] flex justify-center items-center text-gray-500 text-sm font-normal font-['Inter']">{item.id}</div>
                <div className="w-[30%] flex justify-center items-center text-gray-900 text-sm font-medium font-['Inter']">{item.name}</div>
                <div className="w-[15%] flex justify-center items-center">
                  <div className={`px-2 py-0.5 rounded-xl flex justify-center items-center text-xs font-medium font-['Inter'] leading-none ${
                    item.statusColor === 'emerald'
                      ? 'bg-emerald-50 text-emerald-500'
                      : item.statusColor === 'amber'
                      ? 'bg-amber-100 text-amber-600'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {item.status}
                  </div>
                </div>
                <div className="w-[25%] flex justify-center items-center text-gray-500 text-sm font-normal font-['Inter']">{item.period}</div>
                <div className="w-[20%] flex justify-center items-center gap-2">
                  <div className="px-2 py-1 rounded outline outline-1 outline-indigo-600 text-indigo-600 text-sm font-medium font-['Inter'] leading-none cursor-pointer">수정</div>
                  <div className="px-2 py-1 rounded outline outline-1 outline-red-500 text-red-500 text-sm font-medium font-['Inter'] leading-none cursor-pointer">삭제</div>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="self-stretch py-4 flex justify-center items-center gap-1">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`w-9 h-9 rounded-md flex justify-center items-center ${
                  num === 1
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white outline outline-1 outline-gray-200 text-gray-500'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
