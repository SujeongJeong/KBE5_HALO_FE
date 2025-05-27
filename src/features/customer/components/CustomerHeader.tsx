import { Fragment } from "react";
import { NavLink } from 'react-router-dom';

export const CustomerHeader = () => {
  // const isLoggedIn = useCustomerAuthStore((state) => state.isLoggedIn);
  const isLoggedIn = false; // 임시

  const menuItems = [
    { name: "서비스 소개", path: "/customers/services" },
    { name: "후기", path: "/customers/reviews" },
    { name: "고객센터", path: "/customers/support" },
  ];

  return (
    <Fragment>
      <div className="self-stretch h-20 px-28 bg-white border-b border-zinc-100 inline-flex justify-between items-center">
        {/* 좌측 로고 */}
        <div className="flex justify-start items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg inline-flex flex-col justify-center items-center">
            <div className="justify-start text-white text-base font-bold font-['Inter'] leading-tight">H</div>
          </div>
          <div className="justify-start text-zinc-800 text-xl font-bold font-['Inter'] leading-normal">HaloCare</div>
        </div>

        {/* 중간 메뉴 */}
        <div className="flex justify-center items-center gap-10">
          {menuItems.map(({name, path}) => (
            <NavLink 
              key={path}
              to={path}
              end
              className={({isActive}) => `justify-start text-zinc-800 text-base font-medium font-['Inter'] leading-tight ${isActive ? "" : ""}`}
            >
              {name}
            </NavLink>            
          ))}
        </div>

        {/* 우측 메뉴 */}
        {isLoggedIn ? (
          <div className="inline-flex justify-end items-center gap-4">
            <div className="flex justify-end items-center gap-2">
              <div className="w-9 h-9 bg-indigo-600 rounded-2xl inline-flex flex-col justify-center items-center">
                <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-none">홍</div>
              </div>
              <div className="justify-start text-zinc-800 text-base font-medium font-['Inter'] leading-tight">홍길동님</div>
            </div>
            <div className="w-24 h-10 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-center items-center">
              <div className="justify-start text-stone-500 text-sm font-medium font-['Inter'] leading-none">로그아웃</div>
            </div>
          </div>
        ): (
          <div className="flex justify-end items-center gap-4">
            <NavLink 
              to={"/customers/login"}
              end
              className={"justify-start text-indigo-600 text-base font-medium font-['Inter'] leading-tight"}
            >로그인</NavLink>
            <div className="w-28 h-10 bg-indigo-600 rounded-lg inline-flex flex-col justify-center items-center">
              <NavLink 
                to={"/customers/login"}
                end
                className={"justify-start text-white text-sm font-semibold font-['Inter'] leading-none"}
              >회원가입</NavLink>
            </div>
            <div className="w-36 h-10 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-indigo-600 inline-flex flex-col justify-center items-center">
              <NavLink 
                to={"/customers/login"}
                end
                className={"justify-start text-indigo-600 text-sm font-semibold font-['Inter'] leading-none"}
              >매니저 모집</NavLink>
            </div>
          </div>
        )}

      </div>
    </Fragment>
  );
};