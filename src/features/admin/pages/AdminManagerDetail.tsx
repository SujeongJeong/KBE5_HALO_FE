import React, { useState } from 'react';

// 타입 정의 추가
interface WorkTime {
  day: string;
  time: string;
}
interface Manager {
  name: string;
  profile: string;
  role: string;
  career: string;
  intro: string;
  email: string;
  phone: string;
  birth: string;
  gender: string;
  address: string[];
  careers: string[];
  regions: string;
  workTimes: WorkTime[];
  files: string[];
  contractDate: string;
  contractStatus: string;
}

const initialManager: Manager = {
  name: '홍길동',
  profile: '홍',
  role: '청소 전문 매니저',
  career: '경력 5년',
  intro: '깨끗하고 상쾌한 공간을 만들어 드립니다.',
  email: 'hong@example.com',
  phone: '010-1234-5678',
  birth: '1985-01-15',
  gender: '남',
  address: ['(06134) 서울특별시 강남구 테헤란로 123', '456동 789호'],
  careers: [
    '- 클린하우스 전문 청소사 (2018-2023)',
    '- 홈클리닝 서비스 매니저 (2016-2018)',
  ],
  regions: '서울시 강남구, 서초구, 송파구',
  workTimes: [
    { day: '월요일', time: '09:00 - 18:00' },
    { day: '화요일', time: '09:00 - 18:00' },
    { day: '수요일', time: '휴무' },
    { day: '목요일', time: '휴무' },
    { day: '금요일', time: '09:00 - 18:00' },
    { day: '토요일', time: '10:00 - 15:00' },
    { day: '일요일', time: '휴무' },
  ],
  files: ['신분증사본.pdf', '신분증사본.pdf'],
  contractDate: '2023-01-01',
  contractStatus: '활성',
};

const GENDER_OPTIONS = ['남', '여'];
const CONTRACT_STATUS_OPTIONS = ['활성', '비활성'];

const AdminManagerDetail: React.FC = () => {
  const [manager, setManager] = useState<Manager>(initialManager);
  const [isEditMode, setIsEditMode] = useState(false);
  const [edit, setEdit] = useState<Manager>(initialManager);

  // 입력값 변경 핸들러
  const handleChange = <K extends keyof Manager>(field: K, value: Manager[K]) => {
    setEdit(prev => ({ ...prev, [field]: value }));
  };
  // 배열 필드(주소, 경력) 변경
  const handleArrayChange = (field: 'address' | 'careers', idx: number, value: string) => {
    setEdit(prev => ({ ...prev, [field]: prev[field].map((v, i) => (i === idx ? value : v)) }));
  };
  // 업무 가능 시간 변경
  const handleWorkTimeChange = (idx: number, value: string) => {
    setEdit(prev => ({
      ...prev,
      workTimes: prev.workTimes.map((wt, i) => i === idx ? { ...wt, time: value } : wt)
    }));
  };
  // 저장
  const handleSave = () => {
    setManager(edit);
    setIsEditMode(false);
  };
  // 취소
  const handleCancel = () => {
    setEdit(manager);
    setIsEditMode(false);
  };

  // 파일 첨부 핸들러 추가
  const handleFileAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files).map(file => file.name);
      setEdit(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles]
      }));
    }
  };

  // 파일 삭제 핸들러 추가
  const handleFileRemove = (index: number) => {
    setEdit(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F8FA] flex flex-col items-center">
      {/* 헤더 */}
      <div className="w-full h-16 px-6 bg-white border-b border-gray-200 flex items-center justify-between">
        <div className="text-gray-900 text-xl font-bold font-['Inter'] leading-normal">매니저 상세 정보</div>
        {!isEditMode ? (
          <button className="h-10 px-4 bg-indigo-600 rounded-md flex justify-center items-center gap-2 text-white text-sm font-semibold font-['Inter']" onClick={() => setIsEditMode(true)}>
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="4" y="9" width="12" height="2" rx="1" fill="white"/><rect x="9" y="4" width="2" height="12" rx="1" fill="white"/></svg>
            수정하기
          </button>
        ) : null}
      </div>
      <div className="w-full max-w-[1200px] mx-auto flex-1 p-6 flex flex-col gap-6">
        {/* 상단: 프로필/기본정보 + 계약 정보 카드 가로 배치 */}
        <div className="flex flex-row gap-6">
          {/* 프로필 카드 */}
          <div className="flex-1 p-8 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex gap-8 min-w-0">
            <div className="w-40 h-40 bg-slate-100 rounded-full flex justify-center items-center">
              <span className="text-slate-400 text-5xl font-bold font-['Inter'] leading-[57.60px]">{edit.profile}</span>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {!isEditMode ? (
                  <div className="text-slate-800 text-2xl font-bold font-['Inter'] leading-7">{manager.name}</div>
                ) : (
                  <input type="text" value={edit.name} onChange={e => handleChange('name', e.target.value)} className="text-slate-800 text-2xl font-bold font-['Inter'] leading-7 border-b border-gray-200 focus:outline-indigo-500" />
                )}
                {!isEditMode ? (
                  <div className="text-slate-500 text-base font-normal font-['Inter'] leading-tight">{manager.role} | {manager.career}</div>
                ) : (
                  <div className="flex gap-2">
                    <input type="text" value={edit.role} onChange={e => handleChange('role', e.target.value)} className="text-slate-500 text-base font-normal font-['Inter'] leading-tight border-b border-gray-200 focus:outline-indigo-500" style={{width:'50%'}} />
                    <input type="text" value={edit.career} onChange={e => handleChange('career', e.target.value)} className="text-slate-500 text-base font-normal font-['Inter'] leading-tight border-b border-gray-200 focus:outline-indigo-500" style={{width:'50%'}} />
                  </div>
                )}
                {!isEditMode ? (
                  <div className="text-slate-700 text-base font-medium font-['Inter'] leading-tight">{manager.intro}</div>
                ) : (
                  <textarea value={edit.intro} onChange={e => handleChange('intro', e.target.value)} className="text-slate-700 text-base font-medium font-['Inter'] leading-tight border-b border-gray-200 focus:outline-indigo-500 resize-none" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                {/* 이메일 */}
                <div className="flex gap-2 items-center">
                  <div className="w-28 text-slate-500 text-sm font-medium font-['Inter'] leading-none">이메일</div>
                  {!isEditMode ? (
                    <div className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none">{manager.email}</div>
                  ) : (
                    <input type="email" value={edit.email} onChange={e => handleChange('email', e.target.value)} className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none border-b border-gray-200 focus:outline-indigo-500" />
                  )}
                </div>
                {/* 연락처 */}
                <div className="flex gap-2 items-center">
                  <div className="w-28 text-slate-500 text-sm font-medium font-['Inter'] leading-none">연락처</div>
                  {!isEditMode ? (
                    <div className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none">{manager.phone}</div>
                  ) : (
                    <input type="text" value={edit.phone} onChange={e => handleChange('phone', e.target.value)} className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none border-b border-gray-200 focus:outline-indigo-500" />
                  )}
                </div>
                {/* 생년월일 */}
                <div className="flex gap-2 items-center">
                  <div className="w-28 text-slate-500 text-sm font-medium font-['Inter'] leading-none">생년월일</div>
                  {!isEditMode ? (
                    <div className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none">{manager.birth}</div>
                  ) : (
                    <input type="date" value={edit.birth} onChange={e => handleChange('birth', e.target.value)} className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none border-b border-gray-200 focus:outline-indigo-500" />
                  )}
                </div>
                {/* 성별 */}
                <div className="flex gap-2 items-center">
                  <div className="w-28 text-slate-500 text-sm font-medium font-['Inter'] leading-none">성별</div>
                  {!isEditMode ? (
                    <div className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none">{manager.gender}</div>
                  ) : (
                    <select value={edit.gender} onChange={e => handleChange('gender', e.target.value)} className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none border-b border-gray-200 focus:outline-indigo-500">
                      {GENDER_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* 계약 정보 카드 */}
          <div className="w-[340px] flex-shrink-0 p-8 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col gap-4 justify-center">
            <div className="text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">계약 정보</div>
            <div className="flex items-center gap-2">
              <div className="w-32 text-slate-500 text-sm font-medium font-['Inter'] leading-none">계약 시작일</div>
              {!isEditMode ? (
                <div className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none">{manager.contractDate}</div>
              ) : (
                <input type="date" value={edit.contractDate} onChange={e => handleChange('contractDate', e.target.value)} className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none border-b border-gray-200 focus:outline-indigo-500" />
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-32 text-slate-500 text-sm font-medium font-['Inter'] leading-none">계약 상태</div>
              {!isEditMode ? (
                <div className="h-7 px-3 bg-green-100 rounded-2xl flex justify-center items-center">
                  <span className="text-green-800 text-sm font-medium font-['Inter'] leading-none">{manager.contractStatus}</span>
                </div>
              ) : (
                <select value={edit.contractStatus} onChange={e => handleChange('contractStatus', e.target.value)} className="h-7 px-3 rounded-2xl border-b border-gray-200 focus:outline-indigo-500">
                  {CONTRACT_STATUS_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              )}
            </div>
          </div>
        </div>
        {/* 하단: 상세 정보, 첨부파일 카드 세로 배치 */}
        <div className="flex flex-col gap-6 flex-1">
          {/* 상세 정보 */}
          <div className="w-full p-8 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col gap-6">
            <div className="text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">상세 정보</div>
            {/* 주소 */}
            <div className="flex flex-col gap-2">
              <div className="text-slate-500 text-base font-medium font-['Inter'] leading-tight">주소</div>
              <div className="p-4 bg-slate-50 rounded-lg flex flex-col gap-1">
                {edit.address.map((line, i) =>
                  !isEditMode ? (
                    <div key={i} className="text-slate-700 text-sm font-medium font-['Inter'] leading-none">{line}</div>
                  ) : (
                    <input key={i} type="text" value={edit.address[i]} onChange={e => handleArrayChange('address', i, e.target.value)} className="text-slate-700 text-sm font-medium font-['Inter'] leading-none border-b border-gray-200 focus:outline-indigo-500 mb-1" />
                  )
                )}
              </div>
            </div>
            {/* 경력 */}
            <div className="flex flex-col gap-2">
              <div className="text-slate-500 text-base font-medium font-['Inter'] leading-tight">경력</div>
              <div className="p-4 bg-slate-50 rounded-lg flex flex-col gap-1">
                {edit.careers.map((c, i) =>
                  !isEditMode ? (
                    <div key={i} className="text-slate-700 text-sm font-medium font-['Inter'] leading-none">{c}</div>
                  ) : (
                    <input key={i} type="text" value={edit.careers[i]} onChange={e => handleArrayChange('careers', i, e.target.value)} className="text-slate-700 text-sm font-medium font-['Inter'] leading-none border-b border-gray-200 focus:outline-indigo-500 mb-1" />
                  )
                )}
              </div>
            </div>
            {/* 업무 가능 지역 */}
            <div className="flex flex-col gap-2">
              <div className="text-slate-500 text-base font-medium font-['Inter'] leading-tight">업무 가능 지역</div>
              <div className="p-4 bg-slate-50 rounded-lg flex flex-col">
                {!isEditMode ? (
                  <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-none">{manager.regions}</div>
                ) : (
                  <input type="text" value={edit.regions} onChange={e => handleChange('regions', e.target.value)} className="text-slate-700 text-sm font-medium font-['Inter'] leading-none border-b border-gray-200 focus:outline-indigo-500" />
                )}
              </div>
            </div>
            {/* 업무 가능 시간 */}
            <div className="flex flex-col gap-2">
              <div className="text-slate-500 text-base font-medium font-['Inter'] leading-tight">업무 가능 시간</div>
              <div className="p-4 bg-slate-50 rounded-lg flex flex-col gap-2">
                {edit.workTimes.map((wt, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-28 text-slate-700 text-sm font-medium font-['Inter'] leading-none">{wt.day}</div>
                    {!isEditMode ? (
                      <div className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none">{wt.time}</div>
                    ) : (
                      <input type="text" value={edit.workTimes[i].time} onChange={e => handleWorkTimeChange(i, e.target.value)} className="flex-1 text-slate-700 text-sm font-medium font-['Inter'] leading-none border-b border-gray-200 focus:outline-indigo-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* 첨부파일 */}
          <div className="w-full p-8 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <div className="text-slate-500 text-base font-medium font-['Inter'] leading-tight">첨부파일</div>
            {edit.files.map((file, i) => (
              <div key={i} className="h-11 relative bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center pl-4">
                <svg className="mr-2" width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="3" y="3" width="14" height="14" rx="2" stroke="#EF4444" strokeWidth="2"/><rect x="7" y="7" width="6" height="6" rx="1" fill="#EF4444"/></svg>
                {!isEditMode ? (
                  <span className="text-gray-900 text-sm font-normal font-['Inter'] leading-none">{file}</span>
                ) : (
                  <div className="flex-1 flex items-center justify-between pr-4">
                    <input type="text" value={edit.files[i]} onChange={e => setEdit(prev => ({ ...prev, files: prev.files.map((f, idx) => idx === i ? e.target.value : f) }))} className="text-gray-900 text-sm font-normal font-['Inter'] leading-none border-b border-gray-200 focus:outline-indigo-500" />
                    <button 
                      onClick={() => handleFileRemove(i)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L15 15M5 15L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            ))}
            {isEditMode && (
              <div className="mt-2">
                <label className="h-11 px-4 bg-white border border-gray-200 rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50">
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileAdd}
                    multiple
                  />
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4V16M4 10H16" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-gray-500 text-sm font-medium">파일 첨부</span>
                </label>
              </div>
            )}
          </div>
          {/* 저장/취소 버튼 */}
          {isEditMode && (
            <div className="flex gap-2 justify-end">
              <button className="h-12 px-8 bg-slate-100 rounded-lg text-slate-500 text-base font-semibold font-['Inter'] hover:bg-slate-200" onClick={handleCancel}>취소</button>
              <button className="h-12 px-8 bg-indigo-600 rounded-lg text-white text-base font-semibold font-['Inter'] hover:bg-indigo-700" onClick={handleSave}>저장</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminManagerDetail; 