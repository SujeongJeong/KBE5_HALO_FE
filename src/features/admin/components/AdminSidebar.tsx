import { useUserStore } from "@/store/useUserStore";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "@/shared/utils/logout";
import { useNavigate } from "react-router-dom";

export const AdminSidebar = () => {
  const navigate = useNavigate();
  const { username } = useUserStore();

  const menuItems = [
    { name: "대시보드", path: "/admins" },
    { name: "관리자 계정", path: "/admins/accounts" },
    { name: "고객 정보", path: "/admins/customers" },
    { name: "매니저 정보", path: "/admins/managers" },
    { name: "문의 내역", path: "/admins/inquiries" },
    { name: "공지/이벤트", path: "/admins/notices" },
    { name: "배너 관리", path: "/admins/banners" },
  ];

  // 관리자 로그아웃 
  // TODO: 관리자 로그아웃 연결하기, 현재 버튼 없음
  const handleLogout = async () => {
    await logout();
    navigate("/admins/login"); 
  };

  return (
    <Fragment>
      <div className="w-60 self-stretch pb-6 bg-white border-r border-gray-200 inline-flex flex-col justify-start items-start gap-6">
        <div className="self-stretch p-6 inline-flex justify-start items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-md inline-flex flex-col justify-center items-center">
            <div className="justify-start text-white text-base font-bold font-['Inter'] leading-tight">H</div>
          </div>
          <div className="justify-start text-gray-900 text-lg font-bold font-['Inter'] leading-snug">HaloCare</div>
        </div>
        <div className="self-stretch px-6 py-4 border-b border-gray-200 inline-flex justify-start items-center gap-3">
          <div className="inline-flex flex-col justify-start items-start gap-0.5">
            <div className="justify-start text-gray-900 text-sm font-semibold font-['Inter'] leading-none">{username}</div>
            <div className="justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-none">관리자</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          {menuItems.map(({name, path}) => (
            <NavLink 
              key={path}
              to={path}
              end
              className={({isActive}) => `self-stretch h-11 px-6 inline-flex justify-start items-center gap-3 ${isActive ? "bg-violet-50 border-l-[3px] border-indigo-600 text-indigo-600 font-semibold" : "text-gray-500 font-medium"}`}
            >
              {name}
            </NavLink>            
          ))}
        </div>
      </div>
    </Fragment>
  );
};