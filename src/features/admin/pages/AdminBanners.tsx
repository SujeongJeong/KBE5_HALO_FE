import React, { useState } from 'react';

interface Banner {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'ended';
  period: string;
}

const initialBanners: Banner[] = [
  {
    id: 'BN001',
    name: '여름 특별 할인 프로모션',
    status: 'active',
    period: '2023-06-01 ~ 2023-06-30',
  },
  {
    id: 'BN002',
    name: '신규 회원 가입 혜택',
    status: 'active',
    period: '2023-05-15 ~ 2023-07-15',
  },
  {
    id: 'BN003',
    name: '추석 연휴 서비스 안내',
    status: 'pending',
    period: '2023-09-01 ~ 2023-09-30',
  },
  {
    id: 'BN004',
    name: '봄맞이 대청소 이벤트',
    status: 'ended',
    period: '2023-03-01 ~ 2023-04-30',
  },
];

const AdminBanners: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>(initialBanners);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchStartDate, setSearchStartDate] = useState('');
  const [searchEndDate, setSearchEndDate] = useState('');
  const [filteredBanners, setFilteredBanners] = useState<Banner[]>(initialBanners);
  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredBanners.length / ITEMS_PER_PAGE);
  const paginatedBanners = filteredBanners.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 검색
  const handleSearch = () => {
    setFilteredBanners(
      banners.filter(b =>
        b.name.includes(searchTitle) &&
        (!searchStartDate || b.period >= searchStartDate) &&
        (!searchEndDate || b.period <= searchEndDate)
      )
    );
    setCurrentPage(1);
  };

  // 초기화
  const handleReset = () => {
    setSearchTitle('');
    setSearchStartDate('');
    setSearchEndDate('');
    setFilteredBanners(banners);
    setCurrentPage(1);
  };

  // 삭제
  const handleDelete = (id: string) => {
    const newBanners = banners.filter(b => b.id !== id);
    setBanners(newBanners);
    setFilteredBanners(
      newBanners.filter(b =>
        b.name.includes(searchTitle) &&
        (!searchStartDate || b.period >= searchStartDate) &&
        (!searchEndDate || b.period <= searchEndDate)
      )
    );
    setCurrentPage(1);
  };

  // 페이지 변경
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 상태에 따른 스타일 반환
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-50 text-emerald-500';
      case 'pending':
        return 'bg-amber-100 text-amber-600';
      case 'ended':
        return 'bg-gray-100 text-gray-500';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  };

  // 상태 텍스트 반환
  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return '활성';
      case 'pending':
        return '대기중';
      case 'ended':
        return '종료';
      default:
        return status;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F8FA] flex flex-col items-center">
      {/* 헤더 */}
      <div className="w-full h-20 px-8 bg-white border-b border-gray-200 flex items-center justify-between">
        <div className="text-gray-900 text-2xl font-bold font-['Inter'] leading-normal">배너 관리</div>
        <button className="h-14 px-8 bg-[#574DFA] rounded-xl flex justify-center items-center gap-2 text-white text-base font-semibold font-['Inter']">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="11" y="5" width="2" height="14" rx="1" fill="white"/><rect x="5" y="11" width="14" height="2" rx="1" fill="white"/></svg>
          배너 추가
        </button>
      </div>
      {/* 검색 조건 */}
      <div className="w-full max-w-[1240px] mx-auto mt-6">
        <div className="w-full bg-white rounded-b-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-4">
          <div className="text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">검색 조건</div>
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-none">제목</label>
              <input
                type="text"
                value={searchTitle}
                onChange={e => setSearchTitle(e.target.value)}
                placeholder="제목 입력"
                className="h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-slate-700 text-sm font-normal font-['Inter']"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-none">날짜 검색</label>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={searchStartDate}
                  onChange={e => setSearchStartDate(e.target.value)}
                  className="h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-slate-700 text-sm font-normal font-['Inter'] w-1/2"
                />
                <span className="flex items-center text-gray-400">~</span>
                <input
                  type="date"
                  value={searchEndDate}
                  onChange={e => setSearchEndDate(e.target.value)}
                  className="h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-slate-700 text-sm font-normal font-['Inter'] w-1/2"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="w-28 h-12 bg-slate-100 rounded-lg flex justify-center items-center text-slate-500 text-sm font-medium font-['Inter'] hover:bg-slate-200"
              onClick={handleReset}
            >초기화</button>
            <button
              className="w-28 h-12 bg-indigo-600 rounded-lg flex justify-center items-center text-white text-sm font-medium font-['Inter'] hover:bg-indigo-700"
              onClick={handleSearch}
            >검색</button>
          </div>
        </div>
      </div>
      {/* 테이블 */}
      <div className="w-full max-w-[1240px] mx-auto mt-6 bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="h-12 px-6 bg-gray-50 border-b border-gray-200 flex items-center gap-4 rounded-t-xl">
          <div className="w-20 flex items-center"><span className="text-gray-700 text-sm font-semibold font-['Inter']">ID</span></div>
          <div className="w-60 flex items-center"><span className="text-gray-700 text-sm font-semibold font-['Inter']">배너명</span></div>
          <div className="w-28 flex items-center"><span className="text-gray-700 text-sm font-semibold font-['Inter']">상태</span></div>
          <div className="w-48 flex items-center"><span className="text-gray-700 text-sm font-semibold font-['Inter']">노출 기간</span></div>
          <div className="flex-1 flex justify-end items-center"><span className="text-gray-700 text-sm font-semibold font-['Inter']">관리</span></div>
        </div>
        {paginatedBanners.map((banner) => (
          <div key={banner.id} className="h-16 px-6 border-b border-gray-200 flex items-center gap-4">
            <div className="w-20 flex items-center"><span className="text-gray-500 text-sm font-normal font-['Inter']">{banner.id}</span></div>
            <div className="w-60 flex items-center"><span className="text-gray-900 text-sm font-medium font-['Inter']">{banner.name}</span></div>
            <div className="w-28 flex items-center">
              <span className={`px-2 py-0.5 rounded-xl text-xs font-medium font-['Inter'] leading-none ${getStatusStyle(banner.status)}`}>{getStatusText(banner.status)}</span>
            </div>
            <div className="w-48 flex items-center"><span className="text-gray-500 text-sm font-normal font-['Inter']">{banner.period}</span></div>
            <div className="flex-1 flex justify-end items-center gap-2">
              <button className="px-2 py-1 rounded outline outline-1 outline-offset-[-1px] outline-indigo-600 text-indigo-600 text-sm font-medium font-['Inter'] hover:bg-indigo-50">수정</button>
              <button className="px-2 py-1 rounded outline outline-1 outline-offset-[-1px] outline-red-500 text-red-500 text-sm font-medium font-['Inter'] hover:bg-red-50" onClick={() => handleDelete(banner.id)}>삭제</button>
            </div>
          </div>
        ))}
      </div>
      {/* 페이지네이션 */}
      <div className="w-full max-w-[1240px] mx-auto flex justify-center items-center gap-1 py-8">
        <button
          className={`w-9 h-9 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M10 12L6 8L10 4" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`w-9 h-9 ${currentPage === i + 1 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500'} rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center font-medium text-sm hover:bg-indigo-50`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={`w-9 h-9 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center ${currentPage === totalPages || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M6 4L10 8L6 12" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
};

export default AdminBanners; 