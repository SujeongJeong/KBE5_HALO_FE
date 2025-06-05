import React, { useState } from 'react';

const initialInquiries = [
  {
    id: 'INQ001',
    title: '예약 취소 관련 문의',
    customer: '김민지',
    status: '대기중',
    statusColor: 'amber',
    date: '2023-06-15',
    type: '고객',
  },
  {
    id: 'INQ002',
    title: '결제 오류 문의',
    customer: '박준호',
    status: '답변완료',
    statusColor: 'emerald',
    date: '2023-06-14',
    type: '고객',
  },
  {
    id: 'INQ003',
    title: '서비스 품질 관련 문의',
    customer: '이하은',
    status: '대기중',
    statusColor: 'amber',
    date: '2023-06-13',
    type: '고객',
  },
  {
    id: 'INQ004',
    title: '앱 사용 방법 문의',
    customer: '최서진',
    status: '답변완료',
    statusColor: 'emerald',
    date: '2023-06-12',
    type: '고객',
  },
  // 매니저 상담 더미 데이터
  {
    id: 'INQ101',
    title: '근무 스케줄 변경 요청',
    customer: '이상훈',
    status: '대기중',
    statusColor: 'amber',
    date: '2023-06-11',
    type: '매니저',
  },
  {
    id: 'INQ102',
    title: '급여 정산 문의',
    customer: '정유진',
    status: '답변완료',
    statusColor: 'emerald',
    date: '2023-06-10',
    type: '매니저',
  },
];

const TABS = [
  { label: '고객 상담', value: '고객' },
  { label: '매니저 상담', value: '매니저' },
];

const AdminInquiries: React.FC = () => {
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [tab, setTab] = useState('고객');

  // 탭/검색 필터 적용
  const getFilteredInquiries = () => {
    let filtered = inquiries.filter(i => i.type === tab);
    if (searchName) {
      filtered = filtered.filter(i => i.customer.includes(searchName));
    }
    if (searchEmail) {
      filtered = filtered.filter(i => i.id.includes(searchEmail));
    }
    return filtered;
  };
  const filteredInquiries = getFilteredInquiries();

  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredInquiries.length / ITEMS_PER_PAGE);
  const paginatedInquiries = filteredInquiries.slice(
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
  const handleDelete = (id: string) => {
    const newInquiries = inquiries.filter(i => i.id !== id);
    setInquiries(newInquiries);
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
        <div className="text-gray-900 text-2xl font-bold font-['Inter'] leading-normal">문의 내역 관리</div>
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
            <div className="w-20 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">ID</div>
            </div>
            <div className="w-72 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">제목</div>
            </div>
            <div className="w-40 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">고객명</div>
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
          {paginatedInquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="self-stretch h-16 px-6 border-b border-gray-200 inline-flex justify-start items-center gap-4"
            >
              <div className="w-20 flex justify-start items-center">
                <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">{inquiry.id}</div>
              </div>
              <div className="w-72 flex justify-start items-center">
                <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-none">{inquiry.title}</div>
              </div>
              <div className="w-40 flex justify-start items-center">
                <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-none">{inquiry.customer}</div>
              </div>
              <div className="w-28 flex justify-start items-center">
                {inquiry.status === '대기중' ? (
                  <div className="px-2 py-0.5 bg-amber-100 rounded-xl flex justify-center items-center">
                    <div className="justify-start text-amber-600 text-xs font-medium font-['Inter'] leading-none">대기중</div>
                  </div>
                ) : (
                  <div className="px-2 py-0.5 bg-emerald-50 rounded-xl flex justify-center items-center">
                    <div className="justify-start text-emerald-500 text-xs font-medium font-['Inter'] leading-none">답변완료</div>
                  </div>
                )}
              </div>
              <div className="w-40 flex justify-start items-center">
                <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">{inquiry.date}</div>
              </div>
              <div className="flex-1 flex justify-end items-center gap-2">
                <div className="px-2 py-1 bg-black/0 rounded outline outline-1 outline-offset-[-1px] outline-indigo-600 flex justify-center items-center cursor-pointer transition-colors hover:bg-indigo-50 hover:text-indigo-700">
                  <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none group-hover:text-indigo-700">{inquiry.status === '대기중' ? '답변' : '보기'}</div>
                </div>
                <div
                  className="px-2 py-1 bg-black/0 rounded outline outline-1 outline-offset-[-1px] outline-red-500 flex justify-center items-center cursor-pointer transition-colors hover:bg-red-50 hover:text-red-700"
                  onClick={() => handleDelete(inquiry.id)}
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

export default AdminInquiries; 