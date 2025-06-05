import React, { useState } from 'react';

const initialNotices = [
  {
    id: 'NTC001',
    title: '서비스 점검 안내',
    writer: '관리자',
    status: '게시중',
    statusColor: 'emerald',
    date: '2023-06-10',
    type: '공지',
  },
  {
    id: 'NTC002',
    title: '신규 기능 출시',
    writer: '관리자',
    status: '게시중',
    statusColor: 'emerald',
    date: '2023-06-08',
    type: '공지',
  },
  {
    id: 'EVT001',
    title: '여름맞이 할인 이벤트',
    writer: '관리자',
    status: '게시중',
    statusColor: 'indigo',
    date: '2023-06-05',
    type: '이벤트',
  },
  {
    id: 'EVT002',
    title: '리뷰 작성 이벤트',
    writer: '관리자',
    status: '종료',
    statusColor: 'gray',
    date: '2023-05-30',
    type: '이벤트',
  },
];

const TABS = [
  { label: '공지', value: '공지' },
  { label: '이벤트', value: '이벤트' },
];

const AdminNotices: React.FC = () => {
  const [notices, setNotices] = useState(initialNotices);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchWriter, setSearchWriter] = useState('');
  const [tab, setTab] = useState('공지');

  // 탭/검색 필터 적용
  const getFilteredNotices = () => {
    let filtered = notices.filter(n => n.type === tab);
    if (searchTitle) {
      filtered = filtered.filter(n => n.title.includes(searchTitle));
    }
    if (searchWriter) {
      filtered = filtered.filter(n => n.writer.includes(searchWriter));
    }
    return filtered;
  };
  const filteredNotices = getFilteredNotices();

  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredNotices.length / ITEMS_PER_PAGE);
  const paginatedNotices = filteredNotices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 검색
  const handleSearch = () => {
    setCurrentPage(1);
  };
  // 초기화
  const handleReset = () => {
    setSearchTitle('');
    setSearchWriter('');
    setCurrentPage(1);
  };
  // 삭제
  const handleDelete = (id: string) => {
    const newNotices = notices.filter(n => n.id !== id);
    setNotices(newNotices);
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

  return (
    <div className="self-stretch flex flex-col justify-start items-start">
      <div className="self-stretch h-20 px-8 bg-white border-b border-gray-200 flex items-center">
        <div className="text-gray-900 text-2xl font-bold font-['Inter'] leading-normal">공지/이벤트 관리</div>
      </div>
      <div className="self-stretch flex-1 p-6 flex flex-col justify-start items-start gap-6">
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
                <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">제목</div>
                <input
                  type="text"
                  value={searchTitle}
                  onChange={e => setSearchTitle(e.target.value)}
                  placeholder="제목 입력"
                  className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-slate-700 text-sm font-normal font-['Inter'] leading-none focus:outline-indigo-500"
                />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">작성자</div>
                <input
                  type="text"
                  value={searchWriter}
                  onChange={e => setSearchWriter(e.target.value)}
                  placeholder="작성자 입력"
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
            <div className="w-20 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">ID</div>
            </div>
            <div className="w-72 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">제목</div>
            </div>
            <div className="w-40 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">작성자</div>
            </div>
            <div className="w-28 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">상태</div>
            </div>
            <div className="w-40 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">등록일</div>
            </div>
            <div className="flex-1 flex justify-end items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">관리</div>
            </div>
          </div>
          {paginatedNotices.map((notice) => (
            <div
              key={notice.id}
              className="self-stretch h-16 px-6 border-b border-gray-200 inline-flex justify-start items-center gap-4"
            >
              <div className="w-20 flex justify-start items-center">
                <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">{notice.id}</div>
              </div>
              <div className="w-72 flex justify-start items-center">
                <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-none">{notice.title}</div>
              </div>
              <div className="w-40 flex justify-start items-center">
                <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-none">{notice.writer}</div>
              </div>
              <div className="w-28 flex justify-start items-center">
                {notice.status === '게시중' && (
                  <div className="px-2 py-0.5 bg-emerald-50 rounded-xl flex justify-center items-center">
                    <div className="justify-start text-emerald-500 text-xs font-medium font-['Inter'] leading-none">게시중</div>
                  </div>
                )}
                {notice.status === '종료' && (
                  <div className="px-2 py-0.5 bg-gray-100 rounded-xl flex justify-center items-center">
                    <div className="justify-start text-gray-500 text-xs font-medium font-['Inter'] leading-none">종료</div>
                  </div>
                )}
              </div>
              <div className="w-40 flex justify-start items-center">
                <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">{notice.date}</div>
              </div>
              <div className="flex-1 flex justify-end items-center gap-2">
                <div className="px-2 py-1 bg-black/0 rounded outline outline-1 outline-offset-[-1px] outline-indigo-600 flex justify-center items-center cursor-pointer transition-colors hover:bg-indigo-50 hover:text-indigo-700">
                  <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none group-hover:text-indigo-700">수정</div>
                </div>
                <div
                  className="px-2 py-1 bg-black/0 rounded outline outline-1 outline-offset-[-1px] outline-red-500 flex justify-center items-center cursor-pointer transition-colors hover:bg-red-50 hover:text-red-700"
                  onClick={() => handleDelete(notice.id)}
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

export default AdminNotices; 