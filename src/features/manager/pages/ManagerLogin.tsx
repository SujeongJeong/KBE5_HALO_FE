import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/shared/utils/login";

export const ManagerLogin = () => {
  const [loginPhone, setPhone] = useState("");
  const [loginPassword, setPassword] = useState("");
  const navigate = useNavigate();

  // 매니저 로그인
  const handleLogin = async () => {
    try {
      await login("MANAGER", loginPhone, loginPassword);
      navigate("/managers");
    } catch (err: any) {
      alert(err.message || "로그인 실패");
    }
  };

  return (
    <Fragment>
      <div className="w-full min-h-screen bg-gray-50 inline-flex justify-center items-center">
        <div
          className="w-[480px] p-12 bg-white rounded-2xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-center items-center gap-4">
            <div className="inline-flex justify-center items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg inline-flex flex-col justify-center items-center">
                <div className="justify-start text-white text-xl font-bold font-['Inter'] leading-normal">H</div>
              </div>
              <div className="justify-start text-gray-900 text-2xl font-bold font-['Inter'] leading-7">HaloCare</div>
            </div>
            <div className="justify-start text-gray-500 text-base font-medium font-['Inter'] leading-tight">매니저 포털</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">이메일</div>
              <div className="self-stretch h-11 px-4 bg-gray-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center">
                <input 
                  className="w-full justify-start text-gray-400 text-sm font-normal font-['Inter'] leading-none"
                  placeholder="이메일을 입력하세요"
                  value={loginPhone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">비밀번호</div>
              <div className="self-stretch h-11 px-4 bg-gray-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center">
                <input 
                  className="w-full justify-start text-gray-400 text-sm font-normal font-['Inter'] leading-none" placeholder="비밀번호를 입력하세요"
                  value={loginPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">비밀번호 찾기</div>
            <button
              className="self-stretch h-12 bg-indigo-600 rounded-lg inline-flex justify-center items-center cursor-pointer"
              onClick={handleLogin}
            >
              <div className="justify-start text-white text-base font-semibold font-['Inter'] leading-tight">로그인</div>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};