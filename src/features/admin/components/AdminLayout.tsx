import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen flex">
      {/* 왼쪽 사이드바 */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* 로고 */}
        <div className="h-16 px-6 border-b border-gray-200 flex items-center">
          <div className="text-gray-900 text-xl font-bold font-['Inter'] leading-normal">관리자</div>
        </div>
        {/* 메뉴 */}
        <div className="flex-1 py-4">
          <Link
            to="/admin/dashboard"
            className={`h-12 px-6 flex items-center gap-3 ${
              isActive('/admin/dashboard')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="w-5 h-5 relative">
              <div className="w-4 h-4 left-[2px] top-[2px] absolute bg-gray-600" />
            </div>
            <div className="text-sm font-medium font-['Inter'] leading-none">대시보드</div>
          </Link>
          <Link
            to="/admin/notices"
            className={`h-12 px-6 flex items-center gap-3 ${
              isActive('/admin/notices')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="w-5 h-5 relative">
              <div className="w-4 h-4 left-[2px] top-[2px] absolute bg-gray-600" />
            </div>
            <div className="text-sm font-medium font-['Inter'] leading-none">공지/이벤트</div>
          </Link>
          <Link
            to="/admin/inquiries"
            className={`h-12 px-6 flex items-center gap-3 ${
              isActive('/admin/inquiries')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="w-5 h-5 relative">
              <div className="w-4 h-4 left-[2px] top-[2px] absolute bg-gray-600" />
            </div>
            <div className="text-sm font-medium font-['Inter'] leading-none">문의 내역</div>
          </Link>
          <Link
            to="/admin/customers"
            className={`h-12 px-6 flex items-center gap-3 ${
              isActive('/admin/customers')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="w-5 h-5 relative">
              <div className="w-4 h-4 left-[2px] top-[2px] absolute bg-gray-600" />
            </div>
            <div className="text-sm font-medium font-['Inter'] leading-none">고객 정보</div>
          </Link>
          <Link
            to="/admin/accounts"
            className={`h-12 px-6 flex items-center gap-3 ${
              isActive('/admin/accounts')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="w-5 h-5 relative">
              <div className="w-4 h-4 left-[2px] top-[2px] absolute bg-gray-600" />
            </div>
            <div className="text-sm font-medium font-['Inter'] leading-none">관리자 계정</div>
          </Link>
          <Link
            to="/admin/managers"
            className={`h-12 px-6 flex items-center gap-3 ${
              isActive('/admin/managers')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="w-5 h-5 relative">
              <div className="w-4 h-4 left-[2px] top-[2px] absolute bg-gray-600" />
            </div>
            <div className="text-sm font-medium font-['Inter'] leading-none">매니저 정보</div>
          </Link>
        </div>
      </div>
      {/* 메인 컨텐츠 */}
      <div className="flex-1 bg-gray-50 flex flex-col">
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 