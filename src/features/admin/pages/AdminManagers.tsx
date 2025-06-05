import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialManagers = [
  {
    name: '김민수',
    email: 'minsu@example.com',
    phone: '010-1234-5678',
    status: '활성',
    statusColor: 'emerald',
    rating: 4.0,
    ratingCount: 4,
    avatar: 'KM',
  },
  {
    name: '이지연',
    email: 'jiyeon@example.com',
    phone: '010-2345-6789',
    status: '활성',
    statusColor: 'emerald',
    rating: 4.8,
    ratingCount: 5,
    avatar: 'LJ',
  },
  {
    name: '박현우',
    email: 'hyunwoo@example.com',
    phone: '010-3456-7890',
    status: '대기중',
    statusColor: 'amber',
    rating: null,
    ratingCount: 0,
    avatar: 'PH',
  },
  {
    name: '최서진',
    email: 'seojin@example.com',
    phone: '010-4567-8901',
    status: '신고됨',
    statusColor: 'red',
    rating: 2.1,
    ratingCount: 2,
    avatar: 'CS',
  },
];

const TABS = [
  { label: '전체 매니저', value: 'all' },
  { label: '활성 매니저', value: '활성' },
  { label: '신청 내역', value: '대기중' },
  { label: '신고된 매니저', value: '신고됨' },
];

const AdminManagers: React.FC = () => {
  const [managers, setManagers] = useState(initialManagers);
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [tab, setTab] = useState('all');
  const navigate = useNavigate();

  // 탭/검색 필터 적용
  const getFilteredManagers = () => {
    let filtered = managers;
    if (tab !== 'all') {
      filtered = filtered.filter(m => m.status === tab);
    }
    if (searchName) {
      filtered = filtered.filter(m => m.name.includes(searchName));
    }
    if (searchEmail) {
      filtered = filtered.filter(m => m.email.includes(searchEmail));
    }
    return filtered;
  };
  const filteredManagers = getFilteredManagers();

  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredManagers.length / ITEMS_PER_PAGE);
  const paginatedManagers = filteredManagers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 검색
  const handleSearch = () => {
    setCurrentPage(1);
  };
  // 초기화
  const handleReset = () => {
    setSearchName('');
    setSearchEmail('');
    setCurrentPage(1);
  };
  // 삭제
  const handleDelete = (email: string) => {
    const newManagers = managers.filter(m => m.email !== email);
    setManagers(newManagers);
    setCurrentPage(1);
  };
  // 탭 변경
  const handleTab = (value: string) => {
    setTab(value);
    setCurrentPage(1);
  };
  // 페이지 변경
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 통계 카드용 더미 데이터
  const total = 248;
  const active = 186;
  const newApply = 18;
  const reported = 5;

  return (
    <div className="self-stretch flex flex-col justify-start items-start">
      <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center">
        <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">매니저 정보 관리</div>
        <div className="h-10 px-4 bg-indigo-600 rounded-md flex justify-center items-center gap-2 cursor-pointer transition-colors hover:bg-indigo-700">
          <div className="w-5 h-5 relative overflow-hidden">
            <div className="w-2.5 h-2.5 left-[5px] top-[5px] absolute bg-black outline outline-2 outline-offset-[-1px] outline-white" />
          </div>
          <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-none">매니저 추가</div>
        </div>
      </div>
      <div className="self-stretch flex-1 p-6 flex flex-col justify-start items-start gap-6">
        {/* 통계 카드 */}
        <div className="self-stretch inline-flex justify-start items-start gap-4">
          <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">총 매니저 수</div>
            <div className="justify-start text-gray-900 text-2xl font-bold font-['Inter'] leading-7">{total}</div>
            <div className="inline-flex justify-start items-center gap-1">
              <div className="w-4 h-4 relative overflow-hidden">
                <div className="w-2.5 h-[5px] left-[5px] top-[5px] absolute bg-emerald-500" />
              </div>
              <div className="justify-start text-emerald-500 text-xs font-medium font-['Inter'] leading-none">12% 증가</div>
            </div>
          </div>
          <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">활성 매니저 수</div>
            <div className="justify-start text-gray-900 text-2xl font-bold font-['Inter'] leading-7">{active}</div>
            <div className="inline-flex justify-start items-center gap-1">
              <div className="w-4 h-4 relative overflow-hidden">
                <div className="w-2.5 h-[5px] left-[5px] top-[5px] absolute bg-emerald-500" />
              </div>
              <div className="justify-start text-emerald-500 text-xs font-medium font-['Inter'] leading-none">8% 증가</div>
            </div>
          </div>
          <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">신규 신청 수</div>
            <div className="justify-start text-indigo-600 text-2xl font-bold font-['Inter'] leading-7">{newApply}</div>
            <div className="px-2 py-0.5 bg-violet-50 rounded-xl inline-flex justify-center items-center">
              <div className="justify-start text-indigo-600 text-xs font-medium font-['Inter'] leading-none">확인 필요</div>
            </div>
          </div>
          <div className="flex-1 h-24 p-4 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">신고된 매니저 수</div>
            <div className="justify-start text-red-500 text-2xl font-bold font-['Inter'] leading-7">{reported}</div>
            <div className="px-2 py-0.5 bg-red-50 rounded-xl inline-flex justify-center items-center">
              <div className="justify-start text-red-500 text-xs font-medium font-['Inter'] leading-none">확인 필요</div>
            </div>
          </div>
        </div>
        {/* 탭 */}
        <div className="self-stretch border-b border-gray-200 inline-flex justify-start items-start">
          {TABS.map(tabItem => (
            <div
              key={tabItem.value}
              className={`w-40 h-10 px-4 flex justify-center items-center cursor-pointer ${tab === tabItem.value ? 'border-b-2 border-indigo-600' : ''}`}
              onClick={() => handleTab(tabItem.value)}
            >
              <div className={`justify-start text-sm font-['Inter'] leading-none ${tab === tabItem.value ? 'text-indigo-600 font-semibold' : 'text-gray-500 font-medium'}`}>{tabItem.label}</div>
            </div>
          ))}
        </div>
        {/* 검색 조건 */}
        <div className="w-full h-56 p-6 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-start text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">검색 조건</div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-start items-start gap-4">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">이름</div>
                <input
                  type="text"
                  value={searchName}
                  onChange={e => setSearchName(e.target.value)}
                  placeholder="이름 입력"
                  className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-slate-700 text-sm font-normal font-['Inter'] leading-none focus:outline-indigo-500"
                />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">이메일 주소</div>
                <input
                  type="text"
                  value={searchEmail}
                  onChange={e => setSearchEmail(e.target.value)}
                  placeholder="이메일 주소 입력"
                  className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-slate-700 text-sm font-normal font-['Inter'] leading-none focus:outline-indigo-500"
                />
              </div>
            </div>
            <div className="self-stretch inline-flex justify-end items-center gap-2">
              <div
                className="w-28 h-12 bg-slate-100 rounded-lg flex justify-center items-center cursor-pointer transition-colors hover:bg-slate-200 hover:text-slate-700"
                onClick={handleReset}
              >
                <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-none">초기화</div>
              </div>
              <div
                className="w-28 h-12 bg-indigo-600 rounded-lg flex justify-center items-center cursor-pointer transition-colors hover:bg-indigo-700 hover:text-white"
                onClick={handleSearch}
              >
                <div className="justify-start text-white text-sm font-medium font-['Inter'] leading-none">검색</div>
              </div>
            </div>
          </div>
        </div>
        {/* 테이블 */}
        <div className="w-full bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start">
          <div className="self-stretch h-12 px-6 bg-gray-50 border-b border-gray-200 inline-flex justify-start items-center gap-4">
            <div className="w-60 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">이름</div>
            </div>
            <div className="w-60 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">이메일</div>
            </div>
            <div className="w-40 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">연락처</div>
            </div>
            <div className="w-28 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">상태</div>
            </div>
            <div className="w-28 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">평점</div>
            </div>
            <div className="flex-1 flex justify-end items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">관리</div>
            </div>
          </div>
          {paginatedManagers.map((manager) => (
            <div
              key={manager.email}
              className="self-stretch h-16 px-6 border-b border-gray-200 inline-flex justify-start items-center gap-4"
            >
              <div className="w-60 flex justify-start items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-[20px] inline-flex flex-col justify-center items-center">
                  <div className="justify-start text-indigo-600 text-sm font-semibold font-['Inter'] leading-none">{manager.avatar}</div>
                </div>
                <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-none">{manager.name}</div>
              </div>
              <div className="w-60 flex justify-start items-center">
                <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">{manager.email}</div>
              </div>
              <div className="w-40 flex justify-start items-center">
                <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">{manager.phone}</div>
              </div>
              <div className="w-28 flex justify-start items-center">
                {manager.status === '활성' && (
                  <div className="px-2 py-0.5 bg-emerald-50 rounded-xl flex justify-center items-center">
                    <div className="justify-start text-emerald-500 text-xs font-medium font-['Inter'] leading-none">활성</div>
                  </div>
                )}
                {manager.status === '대기중' && (
                  <div className="px-2 py-0.5 bg-amber-100 rounded-xl flex justify-center items-center">
                    <div className="justify-start text-amber-600 text-xs font-medium font-['Inter'] leading-none">대기중</div>
                  </div>
                )}
                {manager.status === '신고됨' && (
                  <div className="px-2 py-0.5 bg-red-50 rounded-xl flex justify-center items-center">
                    <div className="justify-start text-red-500 text-xs font-medium font-['Inter'] leading-none">신고됨</div>
                  </div>
                )}
              </div>
              <div className="w-28 flex justify-start items-center">
                {manager.rating !== null ? (
                  <div className="flex justify-start items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="w-4 h-4 relative overflow-hidden">
                        <div className={`w-4 h-3.5 left-0 top-0 absolute ${i < Math.round(manager.rating) ? 'bg-amber-400' : 'bg-gray-200'}`} />
                      </div>
                    ))}
                    <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-none">{manager.rating.toFixed(1)}</div>
                  </div>
                ) : (
                  <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">-</div>
                )}
              </div>
              <div className="flex-1 flex justify-end items-center gap-2">
                <div
                  className="px-2 py-1 bg-black/0 rounded outline outline-1 outline-offset-[-1px] outline-indigo-600 flex justify-center items-center cursor-pointer transition-colors hover:bg-indigo-50 hover:text-indigo-700"
                  onClick={() => navigate(`/admins/managers/${encodeURIComponent(manager.email)}`)}
                >
                  <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none group-hover:text-indigo-700">수정</div>
                </div>
                <div
                  className="px-2 py-1 bg-black/0 rounded outline outline-1 outline-offset-[-1px] outline-red-500 flex justify-center items-center cursor-pointer transition-colors hover:bg-red-50 hover:text-red-700"
                  onClick={() => handleDelete(manager.email)}
                >
                  <div className="justify-start text-red-500 text-sm font-medium font-['Inter'] leading-none group-hover:text-red-700">삭제</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 페이지네이션 */}
        <div className="self-stretch py-4 inline-flex justify-center items-center gap-1">
          <button
            className={`w-9 h-9 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-center items-center ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-1 h-2 left-[8px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-gray-500" />
            </div>
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`w-9 h-9 ${currentPage === i + 1 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500'} rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-center items-center font-medium text-sm hover:bg-indigo-50`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`w-9 h-9 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-center items-center ${currentPage === totalPages || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-1 h-2 left-[8px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-gray-500" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminManagers; 