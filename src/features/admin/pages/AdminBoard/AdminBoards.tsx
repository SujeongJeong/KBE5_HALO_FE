import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";


export const AdminBoards = () => {
  const [activeTab, setActiveTab] = useState<"notice" | "event">("notice");
  const [titleKeyword, setTitleKeyword] = useState("");
  const [contentKeyword, setContentKeyword] = useState("");
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const noticeData = [
    { id: "NT001", title: "[공지] 서비스 이용 가이드라인 안내", status: "게시중", date: "2023-06-01" },
    { id: "NT002", title: "[공지] 5월 휴무 안내", status: "게시중", date: "2023-04-28" },
    { id: "NT003", title: "[공지] 서비스 이용약관 개정 안내", status: "게시중", date: "2023-04-15" },
    { id: "NT004", title: "[공지] 앱 업데이트 안내", status: "임시저장", date: "2023-04-10" },
  ];

  const eventData = [
    { id: "EV001", title: "[이벤트] 신규 가입 이벤트", status: "게시중", date: "2023-05-01" },
    { id: "EV002", title: "[이벤트] 친구 초대 이벤트", status: "임시저장", date: "2023-04-20" },
  ];

  const boardData = activeTab === "notice" ? noticeData : eventData;

  const handleCreate = () => {
    if (activeTab === "notice") {
      navigate("/boards/notices/new");
    } else {
      navigate("/boards/events/new");
    }
  };

  return (
    <Fragment>
      <div className="w-full self-stretch inline-flex flex-col justify-start items-start">
        {/* 상단 헤더 */}
        <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center">
          <div className="text-gray-900 text-xl font-bold font-['Inter'] leading-normal">공지사항 및 이벤트 관리</div>
          <button
            onClick={handleCreate}
            className="h-10 px-4 bg-indigo-600 rounded-md flex justify-center items-center gap-2 hover:bg-indigo-700 transition cursor-pointer"
          >
            <span className="material-symbols-outlined text-white">add</span>
            <span className="text-white text-sm font-semibold font-['Inter'] leading-none">새 글 작성</span>
          </button>
        </div>

        <div className="self-stretch flex-1 p-6 flex flex-col justify-start items-start gap-6">
          {/* 탭 */}
          <div className="self-stretch border-b border-gray-200 inline-flex">
            <div
              className={`w-40 h-10 px-4 flex justify-center items-center cursor-pointer ${
                activeTab === "notice" ? "border-b-2 border-indigo-600" : ""
              }`}
              onClick={() => setActiveTab("notice")}
            >
              <div className={`text-sm font-['Inter'] leading-none ${
                activeTab === "notice" ? "text-indigo-600 font-semibold" : "text-gray-500 font-medium"
              }`}>공지사항</div>
            </div>
            <div
              className={`w-40 h-10 px-4 flex justify-center items-center cursor-pointer ${
                activeTab === "event" ? "border-b-2 border-indigo-600" : ""
              }`}
              onClick={() => setActiveTab("event")}
            >
              <div className={`text-sm font-['Inter'] leading-none ${
                activeTab === "event" ? "text-indigo-600 font-semibold" : "text-gray-500 font-medium"
              }`}>이벤트</div>
            </div>
          </div>

          {/* 검색 */}
          <form onSubmit={(e) => e.preventDefault()} className="w-full p-6 bg-white rounded-xl shadow flex flex-col gap-4">
            <div className="text-slate-800 text-lg font-semibold">검색 조건</div>
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-slate-700 text-sm font-medium">제목</label>
                <div className="h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-slate-200 flex items-center">
                  <input
                    type="text"
                    placeholder="제목 입력"
                    value={titleKeyword}
                    onChange={(e) => setTitleKeyword(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-slate-700 text-sm font-medium">내용</label>
                <div className="h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-slate-200 flex items-center">
                  <input
                    type="text"
                    placeholder="내용 입력"
                    value={contentKeyword}
                    onChange={(e) => setContentKeyword(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button type="button" className="w-28 h-12 bg-slate-100 rounded-lg text-slate-500 text-sm font-medium hover:bg-slate-200 cursor-pointer">초기화</button>
              <button type="submit" className="w-28 h-12 bg-indigo-600 rounded-lg text-white text-sm font-medium hover:bg-indigo-700 cursor-pointer">검색</button>
            </div>
          </form>

          {/* 목록 */}
          <div className="self-stretch bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start">
            <div className="self-stretch h-12 px-6 bg-gray-50 border-b border-gray-200 inline-flex justify-start items-center space-x-4">
              <div className="w-[10%] flex justify-center items-center text-gray-700 text-sm font-semibold font-['Inter']">ID</div>
              <div className="w-[40%] flex justify-center items-center text-gray-700 text-sm font-semibold font-['Inter']">제목</div>
              <div className="w-[10%] flex justify-center items-center text-gray-700 text-sm font-semibold font-['Inter']">상태</div>
              <div className="w-[20%] flex justify-center items-center text-gray-700 text-sm font-semibold font-['Inter']">등록일</div>
              <div className="w-[20%] flex justify-center items-center text-gray-700 text-sm font-semibold font-['Inter']">관리</div>
            </div>

            {boardData.map((item) => (
              <div key={item.id} className="self-stretch h-16 px-6 border-b border-gray-200 inline-flex justify-start items-center space-x-4">
                <div className="w-[10%] flex justify-center items-center text-gray-500 text-sm font-normal font-['Inter']">{item.id}</div>
                <div className="w-[40%] flex justify-center items-center text-gray-900 text-sm font-medium font-['Inter']">{item.title}</div>
                <div className="w-[10%] flex justify-center items-center">
                  <div className={`px-2 py-0.5 rounded-xl flex justify-center items-center text-xs font-medium font-['Inter'] leading-none ${
                    item.status === "게시중" ? "bg-emerald-50 text-emerald-500" : "bg-amber-100 text-amber-600"
                  }`}>
                    {item.status}
                  </div>
                </div>
                <div className="w-[20%] flex justify-center items-center text-gray-500 text-sm font-normal font-['Inter']">{item.date}</div>
                <div className="w-[20%] flex justify-center items-center gap-2">
                  <Link 
                    // key={admin.adminId}
                    // to={`/admin/accounts/${admin.adminId}`}
                    key={item.id}
                    to={`/admin/${activeTab}s/${item.id}/edit`}
                    className="px-2 py-1 rounded border border-indigo-600 text-indigo-600 text-sm font-medium hover:bg-indigo-50 cursor-pointer">
                    수정
                  </Link>
                  <button className="px-2 py-1 rounded border border-red-500 text-red-500 text-sm font-medium hover:bg-red-50 cursor-pointer">
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 - ManagerInquiries에 있는거 가져다가 쓰기... 묘하게 다르네요... */}
          <div className="self-stretch py-4 flex justify-center items-center gap-1">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`w-9 h-9 rounded-md flex justify-center items-center ${
                  page === num - 1
                    ? "bg-indigo-600 text-white"
                    : "bg-white outline outline-1 outline-gray-200 text-gray-500"
                }`}
                onClick={() => setPage(num - 1)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
