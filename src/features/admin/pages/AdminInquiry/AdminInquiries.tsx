import { Fragment, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { searchAdminInquiries } from "@/features/admin/api/adminInquiry";
import type {
  SearchCustomerInquiries,
  SearchManagerInquiries,
} from "@/features/admin/types/AdminInquirylType";

import { isValidDateRange } from "@/shared/utils/validation";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants/constants";
import { TableSection } from "../../components/TableSection";

export const AdminInquiries = () => {
  const [activeTab, setActiveTab] = useState<"customer" | "manager">(
    "customer",
  );
  const [fadeKey, setFadeKey] = useState(0);
  const [inquiries, setInquiries] = useState<
    (SearchCustomerInquiries | SearchManagerInquiries)[]
  >([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [fromCreatedAt, setFromCreatedAt] = useState<string>("");
  const [toCreatedAt, setToCreatedAt] = useState<string>("");
  const [replyStatus, setReplyStatus] = useState("");
  const [titleKeyword, setTitleKeyword] = useState("");
  const [contentKeyword, setContentKeyword] = useState("");
  const fromDateRef = useRef<HTMLInputElement>(null);

  const fetchInquiries = (
    paramsOverride?: Partial<ReturnType<typeof getCurrentParams>>,
  ) => {
    const params = getCurrentParams();
    const finalParams = { ...params, ...paramsOverride };

    if (!isValidDateRange(finalParams.fromCreatedAt, finalParams.toCreatedAt)) {
      alert("시작일은 종료일보다 늦을 수 없습니다.");
      fromDateRef.current?.focus();
      return;
    }

    // 날짜 파라미터 변환 제거 (yyyy-MM-dd 그대로 전달)
    searchAdminInquiries(activeTab, finalParams)
      .then((res) => {
        setInquiries(res.content);
        setTotal(res.page.totalElements);
        setFadeKey((prev) => prev + 1);
      })
      .catch((err) => {
        console.error("문의사항 목록 조회 실패:", err);
      });
  };

  const getCurrentParams = () => ({
    fromCreatedAt,
    toCreatedAt,
    replyStatus,
    titleKeyword,
    contentKeyword,
    page,
    size: DEFAULT_PAGE_SIZE,
  });

  useEffect(() => {
    fetchInquiries();
  }, [page]);

  // 탭이 바뀔 때 상태 초기화 후 fetchInquiries 호출
  useEffect(() => {
    setFromCreatedAt("");
    setToCreatedAt("");
    setReplyStatus("");
    setTitleKeyword("");
    setContentKeyword("");
    setPage(0);
    setInquiries([]);
    setTotal(0);

    fetchInquiries({ page: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const handleSearch = () => {
    setPage(0);
    fetchInquiries({ page: 0 });
  };

  const handleReset = () => {
    const resetState = {
      fromCreatedAt: "",
      toCreatedAt: "",
      replyStatus: "",
      titleKeyword: "",
      contentKeyword: "",
      page: 0,
    };

    setFromCreatedAt(resetState.fromCreatedAt);
    setToCreatedAt(resetState.toCreatedAt);
    setReplyStatus(resetState.replyStatus);
    setTitleKeyword(resetState.titleKeyword);
    setContentKeyword(resetState.contentKeyword);
    setPage(0);

    fetchInquiries(resetState);
  };

  const handleTabChange = (tab: "customer" | "manager") => {
    if (activeTab === tab) return; // 이미 활성화된 탭이면 아무것도 하지 않음
    setActiveTab(tab);
    setFromCreatedAt("");
    setToCreatedAt("");
    setReplyStatus("");
    setTitleKeyword("");
    setContentKeyword("");
    setPage(0);
    setInquiries([]);
    setTotal(0);
  };

  const totalPages = Math.max(Math.ceil(total / DEFAULT_PAGE_SIZE), 1);

  return (
    <Fragment>
      <div className="w-full flex flex-col">
        <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center">
          <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">
            문의사항
          </div>
        </div>

        {/* 내용 */}
        <div className="p-6 flex flex-col gap-6">
          {/* 탭 + 검색 폼 한 줄 배치 */}
          <div className="w-full flex flex-row items-center justify-between mb-2 gap-2">
            <div className="flex flex-row items-center gap-0">
              {[
                { key: "customer", label: "고객 문의사항" },
                { key: "manager", label: "매니저 문의사항" },
              ].map((tab) => (
                <div
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key as typeof activeTab)}
                  className={`w-40 h-10 px-4 flex justify-center items-center cursor-pointer ${
                    activeTab === tab.key
                      ? "border-b-2 border-indigo-600"
                      : "hover:border-b-2 hover:border-indigo-400"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      activeTab === tab.key
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-500 font-medium hover:text-indigo-400"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
              ))}
            </div>
            {/* 인라인 compact 검색 폼 */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex flex-row items-center gap-2 bg-transparent p-0"
            >
              <input
                type="date"
                ref={fromDateRef}
                value={fromCreatedAt}
                onChange={(e) => setFromCreatedAt(e.target.value)}
                className="h-8 px-2 bg-white rounded border border-gray-200 text-sm text-slate-700 min-w-[120px]"
              />
              <span className="text-slate-500 text-xs">~</span>
              <input
                type="date"
                value={toCreatedAt}
                onChange={(e) => setToCreatedAt(e.target.value)}
                className="h-8 px-2 bg-white rounded border border-gray-200 text-sm text-slate-700 min-w-[120px]"
              />
              <select
                value={replyStatus}
                onChange={(e) => setReplyStatus(e.target.value)}
                className="h-8 px-2 bg-white rounded border border-gray-200 text-sm text-slate-700 min-w-[100px]"
              >
                <option value="">전체</option>
                <option value="PENDING">답변 대기</option>
                <option value="ANSWERED">답변 완료</option>
              </select>
              <input
                type="text"
                value={titleKeyword}
                onChange={(e) => setTitleKeyword(e.target.value)}
                placeholder="제목 검색"
                className="h-8 px-2 bg-white rounded border border-gray-200 text-sm text-slate-700 min-w-[120px]"
              />
              <input
                type="text"
                value={contentKeyword}
                onChange={(e) => setContentKeyword(e.target.value)}
                placeholder="내용 검색"
                className="h-8 px-2 bg-white rounded border border-gray-200 text-sm text-slate-700 min-w-[120px]"
              />
              <button
                type="button"
                onClick={handleReset}
                className="h-8 px-4 bg-slate-100 rounded text-slate-500 text-xs font-medium hover:bg-slate-200 cursor-pointer"
              >
                초기화
              </button>
              <button
                type="submit"
                className="h-8 px-4 bg-indigo-600 rounded text-white text-xs font-medium hover:bg-indigo-700 cursor-pointer"
              >
                검색
              </button>
            </form>
          </div>

          <TableSection
            title="문의사항 내역"
            total={inquiries.length}
            className="min-h-[70vh] flex-1"
          >
            <div className="self-stretch h-12 px-4 bg-slate-50 border-b border-slate-200 inline-flex justify-start items-center">
              <div className="flex-1 flex justify-center items-center">
                <div className="flex-1 flex justify-center items-center">
                  <div className="flex-1 flex justify-center items-center gap-4">
                    <div className="w-[5%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">
                      번호
                    </div>
                    {activeTab === "customer" && (
                      <div className="w-[20%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">
                        문의유형
                      </div>
                    )}
                    <div className="w-[35%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">
                      제목
                    </div>
                    <div className="w-[30%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">
                      작성일시
                    </div>
                    <div className="w-[30%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">
                      답변 상태
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div key={fadeKey} className="w-full fade-in flex-1">
              {inquiries.length === 0 ? (
                <div className="self-stretch min-h-[60vh] px-4 border-b border-slate-200 flex items-center justify-center text-center">
                  <div className="w-full text-sm text-slate-500">
                    조회된 문의사항이 없습니다.
                  </div>
                </div>
              ) : (
                inquiries.map((inquiry) => (
                  <Link
                    key={inquiry.inquiryId}
                    to={`/admin/inquiries/${activeTab}/${inquiry.inquiryId}`}
                    state={{
                      authorId:
                        "authorId" in inquiry ? inquiry.authorId : undefined,
                    }}
                    className="self-stretch h-16 px-4 border-b border-slate-200 flex items-center text-center gap-4"
                  >
                    <div className="w-[5%] text-center text-sm text-slate-700 font-medium font-['Inter'] leading-none">
                      {inquiry.inquiryId}
                    </div>
                    {activeTab === "customer" && (
                      <div className="w-[20%] flex justify-center">
                        <div
                          className={`h-7 px-3 rounded-2xl flex items-center font-medium font-['Inter'] leading-none ${
                            "categoryName" in inquiry &&
                            inquiry.categoryName === "일반문의"
                              ? "bg-blue-100"
                              : "categoryName" in inquiry &&
                                  inquiry.categoryName === "환불문의"
                                ? "bg-red-100"
                                : "categoryName" in inquiry &&
                                    inquiry.categoryName === "기타"
                                  ? "bg-gray-200"
                                  : "bg-slate-100"
                          }`}
                        >
                          <div
                            className={`text-sm font-medium ${
                              "categoryName" in inquiry &&
                              inquiry.categoryName === "일반문의"
                                ? "text-blue-800"
                                : "categoryName" in inquiry &&
                                    inquiry.categoryName === "환불문의"
                                  ? "text-red-800"
                                  : "categoryName" in inquiry &&
                                      inquiry.categoryName === "기타"
                                    ? "text-gray-700"
                                    : "text-slate-500"
                            }`}
                          >
                            {"categoryName" in inquiry
                              ? inquiry.categoryName || "-"
                              : "-"}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="w-[35%] flex items-center text-sm text-slate-700 text-left font-medium font-['Inter'] leading-none">
                      {inquiry.title}
                    </div>
                    <div className="w-[30%] text-center text-sm text-slate-700 font-medium font-['Inter'] leading-none">
                      {inquiry.createdAt}
                    </div>
                    <div className="w-[30%] text-center flex justify-center">
                      {"replyStatus" in inquiry ? (
                        <div
                          className={`h-7 px-3 rounded-2xl flex items-center font-medium font-['Inter'] leading-none ${inquiry.replyStatus ? "bg-green-100" : "bg-yellow-100"}`}
                        >
                          <div
                            className={`text-sm font-medium ${inquiry.replyStatus ? "text-green-800" : "text-yellow-800"}`}
                          >
                            {inquiry.replyStatus ? "답변 완료" : "답변 대기"}
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`h-7 px-3 rounded-2xl flex items-center font-medium font-['Inter'] leading-none ${inquiry.isReplied ? "bg-green-100" : "bg-yellow-100"}`}
                        >
                          <div
                            className={`text-sm font-medium ${inquiry.isReplied ? "text-green-800" : "text-yellow-800"}`}
                          >
                            {inquiry.isReplied ? "답변 완료" : "답변 대기"}
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                ))
              )}
            </div>

            {/* 페이징 */}
            <div className="self-stretch flex justify-center gap-1 pt-4">
              <div
                className="w-8 h-8 rounded-md flex justify-center items-center cursor-pointer bg-slate-100 text-slate-500"
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              >
                <div className="text-sm font-medium font-['Inter'] leading-none">
                  이전
                </div>
              </div>
              {Array.from({ length: totalPages }, (_, i) => i).map((p) => (
                <div
                  key={p}
                  className={`w-8 h-8 rounded-md flex justify-center items-center cursor-pointer ${
                    page === p
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                  onClick={() => setPage(p)}
                >
                  <div className="text-sm font-medium font-['Inter'] leading-none">
                    {p + 1}
                  </div>
                </div>
              ))}
              <div
                className="w-8 h-8 rounded-md flex justify-center items-center cursor-pointer bg-slate-100 text-slate-500"
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages - 1))
                }
              >
                <div className="text-sm font-medium font-['Inter'] leading-none">
                  다음
                </div>
              </div>
            </div>
          </TableSection>
        </div>
      </div>
    </Fragment>
  );
};
