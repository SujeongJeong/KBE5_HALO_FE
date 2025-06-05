import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";

export const AdminAccountForm = () => {

  return (
    <Fragment>
      <form 
        // onSubmit={handleSubmit} 
        className="flex-1 self-stretch h-[968px] inline-flex flex-col justify-start items-start">
        <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start">
          <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center">
            <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">관리자 계정 등록</div>
            <Link 
              to="/admin/accounts"
              className="h-10 px-4 flex justify-center items-center border rounded-md text-sm text-gray-500 hover:bg-gray-100">목록으로</Link>
          </div>
          <div className="self-stretch flex-1 p-6 flex flex-col justify-start items-start gap-6">
            <div className="self-stretch p-6 bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label className="self-stretch inline-flex justify-start items-center gap-1">
                  <span className="text-gray-700 text-sm font-medium">이름</span>
                  <span className="text-red-500 text-sm font-medium">*</span>
                </label>
                <input type="text" className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm" placeholder="이름을 입력하세요" />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label className="self-stretch inline-flex justify-start items-center gap-1">
                  <span className="text-gray-700 text-sm font-medium">이메일</span>
                  <span className="text-red-500 text-sm font-medium">*</span>
                </label>
                <input type="email" className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm" placeholder="이메일 주소를 입력하세요" />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label className="self-stretch inline-flex justify-start items-center gap-1">
                  <span className="text-gray-700 text-sm font-medium">비밀번호</span>
                  <span className="text-red-500 text-sm font-medium">*</span>
                </label>
                <input type="password" className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm" placeholder="비밀번호를 입력하세요" />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label className="self-stretch inline-flex justify-start items-center gap-1">
                  <span className="text-gray-700 text-sm font-medium">상태</span>
                  <span className="text-red-500 text-sm font-medium">*</span>
                </label>
                <select className="self-stretch h-11 px-4 bg-gray-50 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 text-sm">
                  <option value="ACTIVE">활성</option>
                  <option value="INACTIVE">비활성</option>
                </select>
              </div>
              
              {/* 등록/수정 버튼 */}
              <button
                type="submit"
                className="self-stretch h-12 bg-indigo-600 rounded-lg inline-flex justify-center items-center gap-2 cursor-pointer"
              >
                {/* <span className="material-symbols-outlined text-white">{isEditMode ? "edit" : "add"}</span>
                <span className="text-white text-base font-semibold font-['Inter'] leading-tight">
                  {isEditMode ? "관리자 수정하기" : "관리자 등록하기"}
                </span> */}
                <span className="material-symbols-outlined text-white">add</span>
                <span className="text-white text-base font-semibold font-['Inter'] leading-tight">
                  관리자 등록하기
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
