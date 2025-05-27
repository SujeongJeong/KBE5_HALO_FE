import { loginCustomer } from "@/features/customer/api/customerAuth";
import { useState, Fragment } from "react";

export const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("이메일:", email);
    console.log("비밀번호:", password);

    try {
      const data = await loginCustomer(email, password);
      console.log("로그인 성공:", data);
      // 예: 토큰 저장, 리다이렉트 등
    } catch (err: any) {
      //  여기서 axios 에러 처리 (404, 500 포함)
      if (err.response) {
        // 서버에서 응답은 왔는데 오류 상태
        const msg = err.response.data?.message || '서버 오류가 발생했습니다.';
        alert(msg);
      } else if (err.request) {
        // 요청은 갔는데 응답이 없음
        alert('서버가 응답하지 않습니다.');
      } else {
        // axios 외 다른 코드 오류 등
        alert(err.message || '알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <Fragment>
      <div className="w-full h-screen bg-slate-100 flex justify-center items-center">
        <div className="w-[480px] p-10 bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] outline outline-1 outline-offset-[-1px] outline-zinc-100 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-center items-center gap-2">
            <div className="justify-start text-zinc-800 text-3xl font-bold font-['Inter'] leading-loose">로그인</div>
            <div className="justify-start text-stone-500 text-base font-normal font-['Inter'] leading-tight">HaloCare 서비스를 이용하려면 로그인해주세요</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch p-3 bg-red-50 rounded-lg inline-flex justify-start items-center gap-3">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-5 h-5 left-0 top-0 absolute bg-red-100" />
                <div className="w-0 h-2 left-[10px] top-[6px] absolute bg-black outline outline-2 outline-offset-[-1px] outline-red-500" />
              </div>
              <div className="flex-1 justify-start text-red-500 text-sm font-normal font-['Inter'] leading-none">이메일 또는 비밀번호가 올바르지 않습니다.</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-zinc-800 text-sm font-medium font-['Inter'] leading-none">이메일</div>
              <div className="self-stretch h-12 px-4 bg-gray-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center">
                <input 
                  className="w-full justify-start text-gray-400 text-base font-normal font-['Inter'] leading-tight"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-zinc-800 text-sm font-medium font-['Inter'] leading-none">비밀번호</div>
              <div className="self-stretch h-12 px-4 bg-gray-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-between items-center">
                <input 
                  className="w-full justify-start text-gray-400 text-base font-normal font-['Inter'] leading-tight" placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="flex justify-start items-center gap-2">
                <div className="w-5 h-5 bg-white rounded outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-center items-center">
                  <div className="w-3 h-3 relative overflow-hidden">
                    <div className="w-2 h-1.5 left-[2px] top-[3px] absolute bg-black outline outline-2 outline-offset-[-1px] outline-indigo-600" />
                  </div>
                </div>
                <div className="justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-none">로그인 상태 유지</div>
              </div>
              <div className="flex justify-end items-center gap-4">
                <div className="justify-start text-indigo-600 text-sm font-normal font-['Inter'] leading-none">아이디 찾기</div>
                <div className="justify-start text-indigo-600 text-sm font-normal font-['Inter'] leading-none">비밀번호 찾기</div>
              </div>
            </div>
            <button
              className="self-stretch h-12 bg-indigo-600 rounded-lg flex flex-col justify-center items-center cursor-pointer"
              onClick={handleLogin}
            >
              <div className="justify-start text-white text-base font-semibold font-['Inter'] leading-tight">로그인</div>
            </button>
            <div className="self-stretch inline-flex justify-center items-center gap-4">
              <div className="flex-1 h-px bg-gray-200" />
              <div className="justify-start text-gray-400 text-sm font-normal font-['Inter'] leading-none">또는</div>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch h-12 px-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-center items-center gap-3">
                <div className="w-5 h-5 relative overflow-hidden">
                  <div className="w-2.5 h-2 left-[10px] top-[8.30px] absolute bg-blue-500" />
                  <div className="w-4 h-2 left-[1.10px] top-[12.10px] absolute bg-green-600" />
                  <div className="w-1 h-2.5 left-0 top-[5.40px] absolute bg-yellow-500" />
                  <div className="w-4 h-2 left-[1.10px] top-0 absolute bg-red-500" />
                </div>
                <div className="justify-start text-zinc-800 text-base font-medium font-['Inter'] leading-tight">Google로 로그인</div>
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="justify-start text-stone-500 text-base font-normal font-['Inter'] leading-tight">아직 계정이 없으신가요?</div>
            <div className="justify-start text-indigo-600 text-base font-semibold font-['Inter'] leading-tight">회원가입</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};