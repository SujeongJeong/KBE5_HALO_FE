const AdminLogin = () => (
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
        <div className="justify-start text-gray-500 text-base font-medium font-['Inter'] leading-tight">관리자 포털</div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">이메일</div>
          <div
            className="self-stretch h-11 px-4 bg-gray-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center">
            <div className="justify-start text-gray-400 text-sm font-normal font-['Inter'] leading-none">이메일 주소를 입력하세요
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="justify-start text-gray-700 text-sm font-medium font-['Inter'] leading-none">비밀번호</div>
          <div
            className="self-stretch h-11 px-4 bg-gray-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center">
            <div className="justify-start text-gray-400 text-sm font-normal font-['Inter'] leading-none">비밀번호를 입력하세요</div>
          </div>
        </div>
        <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">비밀번호 찾기</div>
        <div className="self-stretch h-12 bg-indigo-600 rounded-lg inline-flex justify-center items-center">
          <div className="justify-start text-white text-base font-semibold font-['Inter'] leading-tight">로그인</div>
        </div>
      </div>
    </div>
  </div>
);

export default AdminLogin;