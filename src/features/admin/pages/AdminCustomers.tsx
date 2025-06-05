import React, { useState } from 'react';

const initialCustomers = [
  {
    name: '김민지',
    email: 'minji@example.com',
    phone: '010-1234-5678',
    status: '활성',
    statusColor: 'emerald',
    reservations: 12,
  },
  {
    name: '박준호',
    email: 'junho@example.com',
    phone: '010-2345-6789',
    status: '신고됨',
    statusColor: 'red',
    reservations: 5,
  },
  {
    name: '이하은',
    email: 'haeun@example.com',
    phone: '010-3456-7890',
    status: '활성',
    statusColor: 'emerald',
    reservations: 24,
  },
  {
    name: '최서진',
    email: 'seojin@example.com',
    phone: '010-4567-8901',
    status: '활성',
    statusColor: 'emerald',
    reservations: 8,
  },
];

const AdminCustomers: React.FC = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState(initialCustomers);
  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredCustomers.length / ITEMS_PER_PAGE);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 검색
  const handleSearch = () => {
    setFilteredCustomers(
      customers.filter(c =>
        c.name.includes(searchName) && c.email.includes(searchEmail)
      )
    );
    setCurrentPage(1);
  };
  // 초기화
  const handleReset = () => {
    setSearchName('');
    setSearchEmail('');
    setFilteredCustomers(customers);
    setCurrentPage(1);
  };
  // 삭제
  const handleDelete = (email: string) => {
    const newCustomers = customers.filter(c => c.email !== email);
    setCustomers(newCustomers);
    setFilteredCustomers(
      newCustomers.filter(c =>
        c.name.includes(searchName) && c.email.includes(searchEmail)
      )
    );
    setCurrentPage(1);
  };
  // 페이지 변경
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center">
        <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">고객 정보 관리</div>
      </div>
      <div className="flex-1 p-6 flex flex-col gap-6 overflow-auto">
        {/* 상단 카드 */}
        <div className="w-full p-4 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-row justify-start items-start gap-4">
          <div className="flex-1 h-24 bg-white rounded-lg flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">총 고객 수</div>
            <div className="justify-start text-gray-900 text-2xl font-bold font-['Inter'] leading-7">3,842</div>
            <div className="inline-flex justify-start items-center gap-1">
              <div className="w-4 h-4 relative overflow-hidden">
                <div className="w-2.5 h-[5px] left-[5px] top-[5px] absolute bg-emerald-500" />
              </div>
              <div className="justify-start text-emerald-500 text-xs font-medium font-['Inter'] leading-none">12% 증가</div>
            </div>
          </div>
          <div className="flex-1 h-24 bg-white rounded-lg flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">신고된 고객 수</div>
            <div className="justify-start text-red-500 text-2xl font-bold font-['Inter'] leading-7">24</div>
            <div className="px-2 py-0.5 bg-red-50 rounded-xl inline-flex justify-center items-center">
              <div className="justify-start text-red-500 text-xs font-medium font-['Inter'] leading-none">확인 필요</div>
            </div>
          </div>
        </div>
        {/* 검색 조건 */}
        <div className="w-full p-4 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-4">
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
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">고객명</div>
            </div>
            <div className="w-72 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">이메일</div>
            </div>
            <div className="w-40 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">연락처</div>
            </div>
            <div className="w-28 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">상태</div>
            </div>
            <div className="w-28 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">예약 건수</div>
            </div>
            <div className="flex-1 flex justify-end items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">관리</div>
            </div>
          </div>
          {paginatedCustomers.map((customer) => (
            <div
              key={customer.email}
              className="self-stretch h-16 px-6 border-b border-gray-200 inline-flex justify-start items-center gap-4"
            >
              <div className="w-60 flex justify-start items-center gap-3">
                <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-none">{customer.name}</div>
              </div>
              <div className="w-72 flex justify-start items-center">
                <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">{customer.email}</div>
              </div>
              <div className="w-40 flex justify-start items-center">
                <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">{customer.phone}</div>
              </div>
              <div className="w-28 flex justify-start items-center">
                {customer.status === '활성' ? (
                  <div className="px-2 py-0.5 bg-emerald-50 rounded-xl flex justify-center items-center">
                    <div className="justify-start text-emerald-500 text-xs font-medium font-['Inter'] leading-none">활성</div>
                  </div>
                ) : (
                  <div className="px-2 py-0.5 bg-red-50 rounded-xl flex justify-center items-center">
                    <div className="justify-start text-red-500 text-xs font-medium font-['Inter'] leading-none">신고됨</div>
                  </div>
                )}
              </div>
              <div className="w-28 flex justify-start items-center">
                <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-none">{customer.reservations}</div>
              </div>
              <div className="flex-1 flex justify-end items-center gap-2">
                <div className="px-2 py-1 bg-black/0 rounded outline outline-1 outline-offset-[-1px] outline-indigo-600 flex justify-center items-center cursor-pointer transition-colors hover:bg-indigo-50 hover:text-indigo-700">
                  <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none group-hover:text-indigo-700">수정</div>
                </div>
                <div
                  className="px-2 py-1 bg-black/0 rounded outline outline-1 outline-offset-[-1px] outline-red-500 flex justify-center items-center cursor-pointer transition-colors hover:bg-red-50 hover:text-red-700"
                  onClick={() => handleDelete(customer.email)}
                >
                  <div className="justify-start text-red-500 text-sm font-medium font-['Inter'] leading-none group-hover:text-red-700">삭제</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 페이지네이션 */}
        <div className="py-4 inline-flex justify-center items-center gap-1">
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

export default AdminCustomers; 