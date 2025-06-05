import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export const AdminCustomers = () => {
  const [nameKeyword, setNameKeyword] = useState('');
  const [phoneKeyword, setPhoneKeyword] = useState('');
  const [page, setPage] = useState(0);

  return (
    <Fragment>
      <div className="w-full self-stretch inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center">
          <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">고객 정보 관리</div>
        </div>
        <div className="self-stretch flex-1 p-6 flex flex-col justify-start items-start gap-6">
          {/* 통계 카드 */}
          <div className="self-stretch inline-flex justify-start items-start gap-4">
            {/* 카드 1 */}
            <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-center gap-2">
              <div className="text-gray-500 text-sm font-medium">총 고객 수</div>
              <div className="text-gray-900 text-2xl font-bold">3,842</div>
              <div className="text-emerald-500 text-xs font-medium">▲12% 증가</div>
            </div>
            {/* 카드 2 */}
            <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-center gap-2">
              <div className="text-gray-500 text-sm font-medium">이번주 신규 고객 수</div>
              <div className="text-emerald-500 text-2xl font-bold">24</div>
              <div className="text-emerald-500 text-xs font-medium">▲12% 증가</div>
            </div>
          </div>

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

          {/* 목록 테이블 */}
          <div className="self-stretch bg-white rounded-lg shadow flex flex-col">
            <div className="h-12 px-6 bg-gray-50 border-b border-gray-200 flex items-center text-gray-700 text-sm font-semibold space-x-4">
              <div className="w-[15%] flex justify-center">고객명</div>
              <div className="w-[20%] flex justify-center">연락처</div>
              <div className="w-[20%] flex justify-center">이메일</div>
              <div className="w-[15%] flex justify-center">상태</div>
              <div className="w-[10%] flex justify-center">예약 건수</div>
              <div className="w-[20%] flex justify-center">관리</div>
            </div>
            {["김민지", "박준호", "이하은", "최서진"].map((name, idx) => (
              <div key={idx} className="h-16 px-6 border-b border-gray-200 flex items-center text-sm text-center space-x-4">
                <div className="w-[15%] flex justify-center items-center text-gray-900 font-medium">{name}</div>
                <div className="w-[20%] flex justify-center items-center text-gray-500">010-0000-000{idx}</div>
                <div className="w-[20%] flex justify-center items-center text-gray-500">example{idx}@mail.com</div>
                <div className="w-[15%] flex justify-center items-center">
                  <div className={`px-2 py-0.5 rounded-xl text-xs font-medium flex justify-center items-center ${idx % 2 === 1 ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-500'}`}>
                    {idx % 2 === 1 ? '신고됨' : '활성'}
                  </div>
                </div>
                <div className="w-[10%] flex justify-center items-center text-gray-900 font-medium">{12 - idx * 2}</div>
                <div className="w-[20%] flex justify-center items-center gap-2">
                  <Link 
                    // key={admin.adminId}
                    // to={`/admin/accounts/${admin.adminId}`}
                    key={idx}
                    to={`/admin/customers/${idx}/edit`}
                    className="px-2 py-1 rounded border border-indigo-600 text-indigo-600 text-sm font-medium hover:bg-indigo-50 cursor-pointer">
                    수정
                  </Link>
                  <button className="px-2 py-1 rounded border border-red-500 text-red-500 text-sm font-medium hover:bg-red-50 cursor-pointer">
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 - ManagerInquiries에 있는거 가져다가 쓰기... 묘하게 다르네요... */}
          <div className="self-stretch py-4 flex justify-center items-center gap-1">
            <button className="w-9 h-9 bg-white rounded-md outline outline-1 outline-gray-200 flex justify-center items-center">◀</button>
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`w-9 h-9 rounded-md flex justify-center items-center ${page === num - 1 ? 'bg-indigo-600 text-white' : 'bg-white outline outline-1 outline-gray-200 text-gray-500'}`}
                onClick={() => setPage(num - 1)}
              >
                {num}
              </button>
            ))}
            <button className="w-9 h-9 bg-white rounded-md outline outline-1 outline-gray-200 flex justify-center items-center">▶</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
