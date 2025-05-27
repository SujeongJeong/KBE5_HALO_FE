import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "@/shared/utils/logout";
import { useNavigate } from "react-router-dom";

export const ManagerSidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "대시보드", path: "/managers" },
    { name: "마이페이지", path: "/managers/my" },
    { name: "예약 관리", path: "/managers/reservations" },
    { name: "리뷰 관리", path: "/managers/reviews" },
    { name: "문의 내역", path: "/managers/inquiries" },
    { name: "급여 관리", path: "/managers/payments" },
  ];

  // 매니저 로그아웃 
  // TODO: 매니저 로그아웃 연결하기, 현재 버튼 없음
  const handleLogout = async () => {
    await logout();
    navigate("/managers/login"); 
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
            <div className="justify-start text-gray-900 text-sm font-semibold font-['Inter'] leading-none">정기현</div>
            <div className="justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-none">매니저</div>
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