import React, { useState } from 'react';

const initialAccounts = [
  {
    name: '정기현',
    email: 'kihyun@halocare.com',
    status: '활성',
    statusColor: 'emerald',
    date: '2023-01-15',
  },
  {
    name: '송지원',
    email: 'jiwon@halocare.com',
    status: '활성',
    statusColor: 'emerald',
    date: '2023-02-20',
  },
  {
    name: '윤서연',
    email: 'seoyeon@halocare.com',
    status: '비활성',
    statusColor: 'red',
    date: '2023-03-10',
  },
  {
    name: '김도윤',
    email: 'doyoon@halocare.com',
    status: '활성',
    statusColor: 'emerald',
    date: '2023-04-05',
  },
];

const statusOptions = [
  { value: '활성', label: '활성' },
  { value: '비활성', label: '비활성' },
];

const AdminAccount: React.FC = () => {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<typeof accounts[0] | null>(null);
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [filteredAccounts, setFilteredAccounts] = useState(initialAccounts);

  // 추가 모달 입력값
  const [addName, setAddName] = useState('');
  const [addEmail, setAddEmail] = useState('');
  const [addPassword, setAddPassword] = useState('');
  const [addStatus, setAddStatus] = useState('활성');

  // 수정 모달 입력값
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [editStatus, setEditStatus] = useState('활성');

  // 페이지네이션 상태
  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredAccounts.length / ITEMS_PER_PAGE);
  const paginatedAccounts = filteredAccounts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 페이지 변경 시 currentPage 업데이트
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 검색/초기화/추가/수정/삭제 시 페이지를 1로 초기화
  const resetToFirstPage = () => setCurrentPage(1);

  // 검색 버튼 클릭 시 필터링
  const handleSearch = () => {
    setFilteredAccounts(
      accounts.filter(acc =>
        acc.name.includes(searchName) && acc.email.includes(searchEmail)
      )
    );
    resetToFirstPage();
  };

  // 초기화 버튼 클릭 시 입력값/리스트 초기화
  const handleReset = () => {
    setSearchName('');
    setSearchEmail('');
    setFilteredAccounts(accounts);
    resetToFirstPage();
  };

  // 삭제 버튼 클릭 시 계정 삭제
  const handleDelete = (email: string) => {
    const newAccounts = accounts.filter(acc => acc.email !== email);
    setAccounts(newAccounts);
    setFilteredAccounts(
      newAccounts.filter(acc =>
        acc.name.includes(searchName) && acc.email.includes(searchEmail)
      )
    );
    resetToFirstPage();
  };

  // 수정 모달 열 때 값 세팅
  const handleEditOpen = (account: typeof accounts[0]) => {
    setSelectedAccount(account);
    setEditName(account.name);
    setEditEmail(account.email);
    setEditPassword('');
    setEditStatus(account.status);
    setEditOpen(true);
  };

  // 추가 모달 열 때 값 초기화
  const handleAddOpen = () => {
    setAddName('');
    setAddEmail('');
    setAddPassword('');
    setAddStatus('활성');
    setOpen(true);
  };

  // 추가 모달 등록 버튼 클릭 시
  const handleAddAccount = () => {
    if (!addName.trim() || !addEmail.trim() || !addPassword.trim()) return;
    const newAccount = {
      name: addName,
      email: addEmail,
      status: addStatus,
      statusColor: addStatus === '활성' ? 'emerald' : 'red',
      date: new Date().toISOString().slice(0, 10),
    };
    const newAccounts = [newAccount, ...accounts];
    setAccounts(newAccounts);
    setFilteredAccounts(
      newAccounts.filter(acc =>
        acc.name.includes(searchName) && acc.email.includes(searchEmail)
      )
    );
    setOpen(false);
    setAddName('');
    setAddEmail('');
    setAddPassword('');
    setAddStatus('활성');
    resetToFirstPage();
  };

  // 수정 모달 수정 버튼 클릭 시
  const handleEditAccount = () => {
    if (!editName.trim() || !editEmail.trim()) return;
    if (!selectedAccount) return;
    const updatedAccount = {
      ...selectedAccount,
      name: editName,
      email: editEmail,
      status: editStatus,
      statusColor: editStatus === '활성' ? 'emerald' : 'red',
    };
    const newAccounts = accounts.map(acc =>
      acc.email === selectedAccount.email ? updatedAccount : acc
    );
    setAccounts(newAccounts);
    setFilteredAccounts(
      newAccounts.filter(acc =>
        acc.name.includes(searchName) && acc.email.includes(searchEmail)
      )
    );
    setEditOpen(false);
    setSelectedAccount(null);
    resetToFirstPage();
  };

export const AdminAccount = () => {
  return (
    <div className="w-full max-w-full flex flex-col justify-start items-start px-0">
      <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center">
        <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">관리자 계정 관리</div>
        <div
          className="h-10 px-4 bg-indigo-600 rounded-md flex justify-center items-center gap-2 cursor-pointer"
          onClick={handleAddOpen}
        >
          <div className="w-5 h-5 relative overflow-hidden">
            <div className="w-2.5 h-2.5 left-[5px] top-[5px] absolute bg-black outline outline-2 outline-offset-[-1px] outline-white" />
          </div>
          <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-none">관리자 추가</div>
        </div>
      </div>
      <div className="self-stretch flex-1 p-6 flex flex-col justify-start items-start gap-6">
        {/* 검색 조건 */}
        <div className="w-full mx-auto p-4 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-4">
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
        <div className="w-full mx-auto bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start">
          <div className="self-stretch h-12 px-6 bg-gray-50 border-b border-gray-200 inline-flex justify-start items-center gap-4">
            <div className="w-60 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">이름</div>
            </div>
            <div className="w-72 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">이메일</div>
            </div>
            <div className="w-48 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">상태</div>
            </div>
            <div className="w-40 flex justify-start items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">등록일</div>
            </div>
            <div className="flex-1 flex justify-end items-center">
              <div className="justify-start text-gray-700 text-sm font-semibold font-['Inter'] leading-none">관리</div>
            </div>
          </div>
          {paginatedAccounts.map((account, idx) => (
            <div
              key={account.email}
              className="self-stretch h-16 px-6 border-b border-gray-200 inline-flex justify-start items-center gap-4"
            >
              <div className="w-60 flex justify-start items-center gap-3">
                <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-none">{account.name}</div>
              </div>
              <div className="w-72 flex justify-start items-center">
                <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">{account.email}</div>
              </div>
              <div className="w-48 flex justify-start items-center">
                {account.status === '활성' ? (
                  <div className="px-2 py-0.5 bg-emerald-50 rounded-xl flex justify-center items-center">
                    <div className="justify-start text-emerald-500 text-xs font-medium font-['Inter'] leading-none">활성</div>
                  </div>
                ) : (
                  <div className="px-2 py-0.5 bg-red-50 rounded-xl flex justify-center items-center">
                    <div className="justify-start text-red-500 text-xs font-medium font-['Inter'] leading-none">비활성</div>
                  </div>
                )}
              </div>
              <div className="w-40 flex justify-start items-center">
                <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">{account.date}</div>
              </div>
              <div className="flex-1 flex justify-end items-center gap-2">
                <div
                  className="px-2 py-1 bg-black/0 rounded outline outline-1 outline-offset-[-1px] outline-indigo-600 flex justify-center items-center cursor-pointer transition-colors hover:bg-indigo-50 hover:text-indigo-700"
                  onClick={() => handleEditOpen(account)}
                >
                  <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none group-hover:text-indigo-700">수정</div>
                </div>
                <div
                  className="px-2 py-1 bg-black/0 rounded outline outline-1 outline-offset-[-1px] outline-red-500 flex justify-center items-center cursor-pointer transition-colors hover:bg-red-50 hover:text-red-700"
                  onClick={() => handleDelete(account.email)}
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
      {/* 추가 모달 */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-[520px] bg-white rounded-xl shadow-lg flex flex-col">
            <div className="h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center rounded-t-xl">
              <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">관리자 계정 등록</div>
              <div
                className="h-10 px-4 bg-black/0 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">취소</div>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-start items-start gap-6">
              <div className="self-stretch p-6 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-6">
                {/* 이름 */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">이름</div>
                    <div className="justify-start text-red-500 text-sm font-medium font-['Inter'] leading-none">*</div>
                  </div>
                  <input
                    type="text"
                    value={addName}
                    onChange={e => setAddName(e.target.value)}
                    placeholder="이름을 입력하세요"
                    className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm font-normal font-['Inter'] leading-none focus:outline-indigo-500"
                  />
                </div>
                {/* 이메일 */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">이메일</div>
                    <div className="justify-start text-red-500 text-sm font-medium font-['Inter'] leading-none">*</div>
                  </div>
                  <input
                    type="email"
                    value={addEmail}
                    onChange={e => setAddEmail(e.target.value)}
                    placeholder="이메일 주소를 입력하세요"
                    className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm font-normal font-['Inter'] leading-none focus:outline-indigo-500"
                  />
                </div>
                {/* 비밀번호 */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">비밀번호</div>
                    <div className="justify-start text-red-500 text-sm font-medium font-['Inter'] leading-none">*</div>
                  </div>
                  <input
                    type="password"
                    value={addPassword}
                    onChange={e => setAddPassword(e.target.value)}
                    placeholder="비밀번호를 입력하세요"
                    className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm font-normal font-['Inter'] leading-none focus:outline-indigo-500"
                  />
                </div>
                {/* 상태 */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">상태</div>
                    <div className="justify-start text-red-500 text-sm font-medium font-['Inter'] leading-none">*</div>
                  </div>
                  <select
                    value={addStatus}
                    onChange={e => setAddStatus(e.target.value)}
                    className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm font-normal font-['Inter'] leading-none focus:outline-indigo-500"
                  >
                    {statusOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                {/* 등록 버튼 */}
                <div
                  className="self-stretch h-12 bg-indigo-600 rounded-md inline-flex justify-center items-center cursor-pointer"
                  onClick={handleAddAccount}
                >
                  <div className="justify-start text-white text-base font-semibold font-['Inter'] leading-tight">관리자 등록하기</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* 수정 모달 */}
      {editOpen && selectedAccount && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-[520px] bg-white rounded-xl shadow-lg flex flex-col">
            <div className="h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center rounded-t-xl">
              <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">관리자 계정 수정</div>
              <div
                className="h-10 px-4 bg-black/0 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center cursor-pointer"
                onClick={() => setEditOpen(false)}
              >
                <div className="justify-start text-gray-500 text-sm font-medium font-['Inter'] leading-none">취소</div>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-start items-start gap-6">
              <div className="self-stretch p-6 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-6">
                {/* 이름 */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">이름</div>
                    <div className="justify-start text-red-500 text-sm font-medium font-['Inter'] leading-none">*</div>
                  </div>
                  <input
                    type="text"
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm font-normal font-['Inter'] leading-none focus:outline-indigo-500"
                  />
                </div>
                {/* 이메일 */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">이메일</div>
                    <div className="justify-start text-red-500 text-sm font-medium font-['Inter'] leading-none">*</div>
                  </div>
                  <input
                    type="email"
                    value={editEmail}
                    onChange={e => setEditEmail(e.target.value)}
                    className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm font-normal font-['Inter'] leading-none focus:outline-indigo-500"
                  />
                </div>
                {/* 비밀번호 */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">비밀번호</div>
                    <div className="justify-start text-gray-500 text-sm font-normal font-['Inter'] leading-none">(변경 시에만 입력)</div>
                  </div>
                  <input
                    type="password"
                    value={editPassword}
                    onChange={e => setEditPassword(e.target.value)}
                    placeholder="새 비밀번호를 입력하세요"
                    className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm font-normal font-['Inter'] leading-none focus:outline-indigo-500"
                  />
                </div>
                {/* 상태 */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">상태</div>
                    <div className="justify-start text-red-500 text-sm font-medium font-['Inter'] leading-none">*</div>
                  </div>
                  <select
                    value={editStatus}
                    onChange={e => setEditStatus(e.target.value)}
                    className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm font-normal font-['Inter'] leading-none focus:outline-indigo-500"
                  >
                    {statusOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                {/* 수정 버튼 */}
                <div
                  className="self-stretch h-12 bg-indigo-600 rounded-md inline-flex justify-center items-center cursor-pointer"
                  onClick={handleEditAccount}
                >
                  <div className="justify-start text-white text-base font-semibold font-['Inter'] leading-tight">관리자 수정하기</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};