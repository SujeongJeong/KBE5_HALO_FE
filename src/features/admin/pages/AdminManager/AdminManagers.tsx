import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants/constants";

interface Manager {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: "ACTIVE" | "PENDING" | "PENDING";
  rating: number | null;
}

const dummyManagers: Manager[] = [
  // 더미 데이터 12명 정도로 확장 예시
  {
    id: 1,
    name: "김민수",
    email: "minsu@example.com",
    phone: "010-1234-5678",
    status: "ACTIVE",
    rating: 4.0,
  },
  {
    id: 2,
    name: "이지연",
    email: "jiyeon@example.com",
    phone: "010-2345-6789",
    status: "ACTIVE",
    rating: 4.8,
  },
  {
    id: 3,
    name: "박현우",
    email: "hyunwoo@example.com",
    phone: "010-3456-7890",
    status: "PENDING",
    rating: null,
  },
  {
    id: 4,
    name: "한지민",
    email: "jimin@example.com",
    phone: "010-1111-2222",
    status: "PENDING",
    rating: 3.7,
  },
  {
    id: 5,
    name: "정해인",
    email: "haein@example.com",
    phone: "010-3333-4444",
    status: "ACTIVE",
    rating: 4.2,
  },
  {
    id: 6,
    name: "문채원",
    email: "chaewon@example.com",
    phone: "010-5555-6666",
    status: "PENDING",
    rating: null,
  },
  {
    id: 7,
    name: "서강준",
    email: "kangjoon@example.com",
    phone: "010-7777-8888",
    status: "PENDING",
    rating: 2.9,
  },
  {
    id: 8,
    name: "이수현",
    email: "soohyun@example.com",
    phone: "010-8765-4321",
    status: "ACTIVE",
    rating: 4.9,
  }
];

export const AdminManagers = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'applied'>('all');
  const [nameKeyword, setNameKeyword] = useState('');
  const [phoneKeyword, setPhoneKeyword] = useState('');
  const [page, setPage] = useState(0);

  const filteredManagers = dummyManagers.filter((manager) => {
    const matchName = manager.name.includes(nameKeyword);
    const matchPhone = manager.phone.includes(phoneKeyword);
    const matchStatus =
      activeTab === 'all'
        ? true
        : activeTab === 'active'
        ? manager.status === 'ACTIVE'
        : manager.status === 'PENDING';

    return matchName && matchPhone && matchStatus;
  });

  const totalPages = Math.ceil(filteredManagers.length / DEFAULT_PAGE_SIZE);

  return (
    <Fragment>
      <div className="w-full flex flex-col">
        {/* 제목 */}
        <div className="h-16 px-6 bg-white border-b border-gray-200 flex items-center">
          <div className="text-gray-900 text-xl font-bold">매니저 정보 관리</div>
        </div>

        {/* 내용 */}
        <div className="p-6 flex flex-col gap-6">
          {/* 탭 */}
          <div className="border-b border-gray-200 flex">
            {[
              { key: 'all', label: '전체 매니저' },
              { key: 'active', label: '활성 매니저' },
              { key: 'applied', label: '신청 내역' },
            ].map((tab) => (
              <div
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`w-40 h-10 px-4 flex justify-center items-center cursor-pointer ${
                  activeTab === tab.key ? 'border-b-2 border-indigo-600' : ''
                }`}
              >
                <span
                  className={`text-sm ${
                    activeTab === tab.key ? 'text-indigo-600 font-semibold' : 'text-gray-500 font-medium'
                  }`}
                >
                  {tab.label}
                </span>
              </div>
            ))}
          </div>

          {/* 검색 */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
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

          {/* 테이블 */}
          <div className="w-full bg-white rounded-lg shadow flex flex-col">
            {/* 헤더 */}
            <div className="h-12 px-6 bg-gray-50 border-b border-gray-200 flex items-center text-sm font-semibold text-gray-700 space-x-4">
              <div className="w-[10%] flex justify-center items-center">이름</div>
              <div className="w-[20%] flex justify-center items-center">연락처</div>
              <div className="w-[20%] flex justify-center items-center">이메일</div>
              <div className="w-[15%] flex justify-center items-center">상태</div>
              <div className="w-[15%] flex justify-center items-center">평점</div>
              <div className="w-[20%] flex justify-center items-center">관리</div>
            </div>

            {/* 리스트 */}
            {filteredManagers.map((m) => (
              <div key={m.id} className="h-16 px-6 border-b border-gray-200 flex text-sm space-x-4">
                <div className="w-[10%] flex justify-center items-center">
                  <span className="text-gray-900 font-medium">{m.name}</span>
                </div>
                <div className="w-[20%] flex justify-center items-center text-gray-500">{m.phone}</div>
                <div className="w-[20%] flex justify-center items-center text-gray-500">{m.email}</div>
                <div className="w-[15%] flex justify-center items-center">
                  {m.status === 'ACTIVE' && (
                    <span className="px-2 py-0.5 text-xs text-emerald-500 bg-emerald-50 rounded-xl">활성</span>
                  )}
                  {m.status === 'PENDING' && (
                    <span className="px-2 py-0.5 text-xs text-amber-600 bg-amber-100 rounded-xl">대기중</span>
                  )}
                </div>
                <div className="w-[15%] flex justify-center items-center">
                  {m.rating !== null ? (
                    <>
                      <span className="material-icons-outlined text-base text-yellow-400">star</span>
                      <span className="text-gray-900">{m.rating.toFixed(1)}</span>
                    </>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </div>
                <div className="w-[20%] flex justify-center items-center gap-2">
                  <Link 
                    // key={admin.adminId}
                    // to={`/admin/accounts/${admin.adminId}`}
                    key={m.id}
                    to={`/admin/managers/${m.id}/edit`}
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
          {totalPages > 1 && (
            <div className="self-stretch flex justify-center gap-1 pt-4">
              <div
                className="w-8 h-8 rounded-md flex justify-center items-center cursor-pointer bg-slate-100 text-slate-500"
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              >
                <div className="text-sm font-medium">이전</div>
              </div>
              {Array.from({ length: totalPages }, (_, i) => i).map((p) => (
                <div
                  key={p}
                  className={`w-8 h-8 rounded-md flex justify-center items-center cursor-pointer ${
                    page === p ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                  onClick={() => setPage(p)}
                >
                  <div className="text-sm font-medium">{p + 1}</div>
                </div>
              ))}
              <div
                className="w-8 h-8 rounded-md flex justify-center items-center cursor-pointer bg-slate-100 text-slate-500"
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
              >
                <div className="text-sm font-medium">다음</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};
