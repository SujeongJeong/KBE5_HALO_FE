import { Fragment, useEffect, useRef, useState } from "react";
import type { ManagerReservationSummary as ManagerReservationType } from "@/features/manager/types/ManagerReservationType";
import { isValidDateRange } from "@/shared/utils/validation";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants/constants";
import { searchManagerReservations } from "@/features/manager/api/managerReservation";
import { Link } from "react-router-dom";

export const ManagerReservations = () => {
  const [fadeKey, setFadeKey] = useState(0);
  const [reservations, setReservations] = useState<ManagerReservationType[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [fromRequestDate, setFromRequestDate] = useState<string>("");
  const [toRequestDate, setToRequestDate] = useState<string>(""); 
  const [reservationStatus, setReservationStatus] = useState("");
  const [isCheckedIn, setIsCheckedIn] = useState<string>("");
  const [isCheckedOut, setIsCheckedOut] = useState<string>("");
  const [isReviewed, setIsReviewed] = useState<string>("");
  const [customerNameKeyword, setCustomerNameKeyword] = useState("");
  const fromDateRef = useRef<HTMLInputElement>(null);

  const fetchReservations = (paramsOverride?: Partial<ReturnType<typeof getCurrentParams>>) => {
    const params = getCurrentParams();
    const finalParams = { ...params, ...paramsOverride };

    if (!isValidDateRange(finalParams.fromRequestDate, finalParams.toRequestDate)) {
      alert("시작일은 종료일보다 늦을 수 없습니다.");
      fromDateRef.current?.focus();
      return;
    }

    searchManagerReservations(finalParams)
    .then((res) => {
      setReservations(res.content);
      setTotal(res.page.totalElements);
      setFadeKey((prev) => prev + 1);
    });
  };

  const getCurrentParams = () => ({
    fromRequestDate,
    toRequestDate,
    reservationStatus,
    isCheckedIn,
    isCheckedOut,
    isReviewed,
    customerNameKeyword,
    page,
    size: DEFAULT_PAGE_SIZE,
  });

  useEffect(() => {
    fetchReservations();
  }, [page]);

  const handleSearch = () => {
    setPage(0);
    fetchReservations({ page: 0 });
  };

  const handleReset = () => {
    const resetState = {
      fromRequestDate: "",
      toRequestDate: "",
      reservationStatus: "",
      isCheckedIn: "",
      isCheckedOut: "",
      isReviewed: "",
      customerNameKeyword: "",
      page: 0,
    };

    setFromRequestDate(resetState.fromRequestDate);
    setToRequestDate(resetState.toRequestDate);
    setReservationStatus(resetState.reservationStatus);
    setIsCheckedIn(resetState.isCheckedIn);
    setIsCheckedOut(resetState.isCheckedOut);
    setIsReviewed(resetState.isReviewed);
    setCustomerNameKeyword(resetState.customerNameKeyword);
    setPage(0);

    fetchReservations(resetState);
  };

  const totalPages = Math.max(Math.ceil(total / DEFAULT_PAGE_SIZE), 1);

  return (
    <Fragment>
      <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-16 px-6 bg-white border-b border-gray-200 inline-flex justify-between items-center">
          <div className="justify-start text-gray-900 text-xl font-bold font-['Inter'] leading-normal">예약 관리</div>
        </div>
        
        <div className="self-stretch p-6 flex flex-col justify-start items-start gap-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="self-stretch p-6 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start gap-4"
          >
            <div className="self-stretch justify-start text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">검색 조건</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">예약 날짜</div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <input
                        type="date"
                        ref={fromDateRef}
                        value={fromRequestDate}
                        onChange={(e) => setFromRequestDate(e.target.value)}
                        className="flex-1 h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 text-sm placeholder:text-slate-400 focus:outline-indigo-500 "
                      />
                      <span className="text-slate-500 text-sm">~</span>
                      <input
                        type="date"
                        value={toRequestDate}
                        onChange={(e) => setToRequestDate(e.target.value)}
                        className="flex-1 h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 text-sm placeholder:text-slate-400 focus:outline-indigo-500"
                      />
                    </div>
                  </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">고객명</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <input
                      value={customerNameKeyword}
                      onChange={(e) => setCustomerNameKeyword(e.target.value)}
                      placeholder="고객명 검색"
                      className="w-full text-sm text-slate-700 placeholder:text-slate-400 bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">예약 상태</div>
                  <select
                    value={reservationStatus}
                    onChange={(e) => setReservationStatus(e.target.value)}
                    className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 text-sm focus:outline-indigo-500"
                  >
                    <option value="">전체</option>
                    <option value="PENDING">답변 대기</option>
                    <option value="ANSWERED">답변 완료</option>
                  </select>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">체크인 여부</div>
                  <select
                    value={isCheckedIn}
                    onChange={(e) => setIsCheckedIn(e.target.value)}
                    className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 text-sm focus:outline-indigo-500"
                  >
                    <option value="">전체</option>
                    <option value="true">Y</option>
                    <option value="false">N</option>
                  </select>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">체크아웃 여부</div>
                  <select
                    value={isCheckedOut}
                    onChange={(e) => setIsCheckedOut(e.target.value)}
                    className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 text-sm focus:outline-indigo-500"
                  >
                    <option value="">전체</option>
                    <option value="true">Y</option>
                    <option value="false">N</option>
                  </select>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">리뷰 여부</div>
                  <select
                    value={isReviewed}
                    onChange={(e) => setIsReviewed(e.target.value)}
                    className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 text-sm focus:outline-indigo-500"
                  >
                    <option value="">전체</option>
                    <option value="true">Y</option>
                    <option value="false">N</option>
                  </select>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-end items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-28 h-12 bg-slate-100 rounded-lg flex justify-center items-center text-slate-500 text-sm font-medium font-['Inter'] leading-none hover:bg-slate-200 transition cursor-pointer"
                >
                  초기화
                </button>
                <button
                  type="submit"
                  className="w-28 h-12 bg-indigo-600 rounded-lg flex justify-center items-center text-white text-sm font-medium font-['Inter'] leading-none hover:bg-indigo-700 transition cursor-pointer"
                >
                  검색
                </button>
              </div>
            </div>
          </form>


          <div className="self-stretch p-6 bg-white rounded-xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.04)] flex flex-col justify-start items-start">
            <div className="self-stretch inline-flex justify-between items-center pb-4">
              <div className="justify-start text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">예약 내역</div>
              <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">총 {total}건</div>
            </div>
            <div className="self-stretch h-12 px-4 bg-slate-50 border-b border-slate-200 inline-flex justify-start items-center">
              <div className="flex-1 flex justify-center items-center">
                <div className="flex-1 flex justify-center items-center">
                  <div className="flex-1 flex justify-center items-center gap-4">
                    <div className="w-[5%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">번호</div>
                    <div className="w-[15%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">청소 요청 날짜</div>
                    <div className="w-[10%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">고객명</div>
                    <div className="w-[30%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">고객 주소</div>
                    <div className="w-[10%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">서비스</div>
                    <div className="w-[12%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">예약 상태</div>
                    <div className="w-[5%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">체크인</div>
                    <div className="w-[8%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">체크아웃</div>
                    <div className="w-[5%] text-center text-sm font-semibold text-slate-700 font-semibold font-['Inter'] leading-none">리뷰</div>
                  </div>
                </div>
              </div>
            </div>

            <div key={fadeKey} className="w-full fade-in">
              { reservations.length === 0 ? (
                <div className="self-stretch h-16 px-4 border-b border-slate-200 flex items-center text-center">
                  <div className="w-full text-sm text-slate-500">조회된 문의사항이 없습니다.</div>
                </div>
              ) : (
                reservations.map((reservation) => (
                  <Link 
                    key={reservation.reservationId}
                    to={`/managers/reservations/${reservation.reservationId}`}
                    className="self-stretch h-16 px-4 border-b border-slate-200 flex items-center text-center gap-4">
                    <div className="w-[5%] text-center text-sm text-slate-700 font-medium font-['Inter'] leading-none">{reservation.reservationId}</div>
                    <div className="w-[15%] text-center text-sm text-slate-700 font-medium font-['Inter'] leading-none">{reservation.requestDate}</div>
                    <div className="w-[10%] text-center text-sm text-slate-700 font-medium font-['Inter'] leading-none">{reservation.customerName}</div>
                    <div className="w-[30%] text-center text-sm text-slate-700 font-medium font-['Inter'] leading-none">{reservation.customerAddress}</div>
                      <div className="w-[10%] text-center text-sm text-slate-700 font-medium font-['Inter'] leading-none">
                        <div className="h-7 px-3 bg-sky-100 rounded-2xl inline-flex justify-center items-center">
                          <div className="justify-start text-sky-900 text-sm font-medium font-['Inter'] leading-none">{reservation.serviceName}</div>
                        </div>
                      </div>
                      <div className="w-[12%] text-center text-sm text-slate-700 font-medium font-['Inter'] leading-none">
                        <div
                          className={`h-7 px-3 rounded-2xl inline-flex justify-center items-center ${
                            reservation.status === "CONFIRMED"
                              ? "bg-yellow-100"
                              : reservation.status === "COMPLETED"
                              ? "bg-green-100"
                              : reservation.status === "CANCELED"
                              ? "bg-red-100"
                              : "bg-gray-100"
                          }`}
                        >
                        <div
                          className={`text-sm font-medium font-['Inter'] leading-none ${
                            reservation.status === "CONFIRMED"
                              ? "text-yellow-800"
                              : reservation.status === "COMPLETED"
                              ? "text-green-800"
                              : reservation.status === "CANCELED"
                              ? "text-red-800"
                              : "text-gray-800"
                          }`}
                        >
                          {reservation.statusName}
                        </div>
                      </div>
                    </div>
                    <div className="w-[5%] text-center text-sm text-slate-700 font-medium font-['Inter'] leading-none">{reservation.isCheckedIn ? 'Y' : 'N'}</div>
                    <div className="w-[8%] text-center text-sm text-slate-700 font-medium font-['Inter'] leading-none">{reservation.isCheckedOut ? 'Y' : 'N'}</div>
                    <div className="w-[5%] text-center text-sm text-slate-700 font-medium font-['Inter'] leading-none">{reservation.isReviewed ? 'Y' : 'N'}</div>
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
                <div className="text-sm font-medium font-['Inter'] leading-none">이전</div>
              </div>
              {Array.from({ length: totalPages }, (_, i) => i).map((p) => (
                <div
                  key={p}
                  className={`w-8 h-8 rounded-md flex justify-center items-center cursor-pointer ${
                    page === p ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                  onClick={() => setPage(p)}
                >
                  <div className="text-sm font-medium font-['Inter'] leading-none">{p + 1}</div>
                </div>
              ))}
              <div
                className="w-8 h-8 rounded-md flex justify-center items-center cursor-pointer bg-slate-100 text-slate-500"
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
              >
                <div className="text-sm font-medium font-['Inter'] leading-none">다음</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
};