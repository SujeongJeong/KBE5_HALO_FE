import { useState, useEffect } from "react";
import { searchCustomerReviews } from "@/features/customer/api/CustomerReview";
import type { CustomerReviewRspType } from "../../types/CustomerReviewType";
import { getFormattedDate, formatTimeRange } from "@/shared/utils/dateUtils";
import { Star, Pencil } from "lucide-react";
import { REVIEW_PAGE_SIZE } from "@/shared/constants/constants";
import { useNavigate } from "react-router-dom";



export const CustomerReviewsPage = () => {
  const [reviews, setReviews] = useState<CustomerReviewRspType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await searchCustomerReviews({ page: currentPage, size: REVIEW_PAGE_SIZE });
        setReviews(data.content);
        setTotalReviews(data.page.totalElements);
      } catch (error) {
        alert("리뷰 목록을 조회하는데 실패하였습니다.");
      }
    };

    fetchReviews();
  }, [currentPage]);

  const filteredReviews = reviews.filter((r) => {
    if (selectedRating === null) return true;
    if (selectedRating === -1) return !r.reviewId || r.rating === 0;
    if (selectedRating === 3) return r.rating >= 1 && r.rating <= 3;
    return r.rating === selectedRating;
  });

  const pageSize = REVIEW_PAGE_SIZE;

  const handleFilterClick = (idx: number) => {
    const rating = idx === 0 ? null : idx === 1 ? -1 : idx === 3 ? 3 : 6 - idx;
    setSelectedRating(rating);
    setCurrentPage(0);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">리뷰 내역</h2>
      <p className="text-sm text-gray-500 mb-4">
        작성하신 리뷰 내역을 확인하고 관리할 수 있습니다.
      </p>
      <div className="flex gap-2 mb-4">
        {["전체", "리뷰 작성 필요", "5점", "4점", "3점 이하"].map((label, idx) => (
          <button
            key={label}
            onClick={() => handleFilterClick(idx)}
            className={`px-4 py-1 rounded-full border ${
              selectedRating === (idx === 0 ? null : idx === 3 ? 3 : 6 - idx)
                ? "bg-indigo-100 border-indigo-500 text-indigo-700"
                : "border-gray-300 text-gray-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 리뷰 카드 */}
      <div className="space-y-4">
        {filteredReviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>

      {/* 페이지네이션 */}
      {totalReviews > 0 && (
        <div className="flex justify-center gap-2 pt-4">
          {/* Previous Page Button */}
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`w-9 h-9 rounded-lg flex justify-center items-center
              border ${currentPage === 0 ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"}
            `}
          >
            <span className="material-symbols-outlined text-base">chevron_left</span>
          </button>

          {/* Page Numbers */}
          {Array.from({ length: Math.ceil(totalReviews / pageSize) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-9 h-9 rounded-lg flex justify-center items-center text-sm font-medium cursor-pointer
                border ${currentPage === i
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Page Button */}
          <button
            disabled={currentPage === Math.ceil(totalReviews / pageSize) - 1}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`w-9 h-9 rounded-lg flex justify-center items-center
              border ${currentPage === Math.ceil(totalReviews / pageSize) - 1 ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"}
            `}
          >
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
      )}
      
    </div>
  );
};

// 리뷰 카드
const ReviewCard: React.FC<CustomerReviewRspType> = ({
    serviceCategoryName,
    requestDate,
    startTime,
    turnaround,
    managerName,
    content,
    rating,
    createdAt,
    reviewId,
    reservationId,
  }) => {
  const navigate = useNavigate();

  const handleWriteReview = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/my/reviews/${reservationId}`, {
      state: {
        fromReservation: true,
        serviceName: serviceCategoryName,
        managerName,
      },
    });
  };

    return (
      <div className="border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        {/* 리뷰 내용 */}
        {reviewId && (
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={
                    i < (rating ?? 0)
                      ? "fill-yellow-400 stroke-yellow-400 text-yellow-400"
                      : "stroke-gray-300 text-gray-300"
                  }
                />
              ))}
              <span className="text-lg font-bold text-gray-800">
                {typeof rating === "number" ? rating.toFixed(1) : "0"}
              </span>
            </div>
            <span className="text-sm text-gray-500">작성일: {getFormattedDate(new Date(createdAt))}</span>
          </div>
        )}
        <p className="text-gray-800 text-sm whitespace-pre-line mb-[10px]">{content}</p>

        <hr className="border-gray-200" />

        {/* 예약 정보 + 매니저 정보 */}
        <div className="pt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-500 text-3xl">photo_camera</span>
            </div>
            <div className="text-sm">
              <p className="text-gray-500">
                {getFormattedDate(new Date(requestDate))} {formatTimeRange(startTime, turnaround)}
              </p>
              <p className="text-gray-400">{serviceCategoryName}</p>
              <p className="font-medium text-gray-800">{managerName}</p>
            </div>
          </div>

          {reviewId ? (
            <button
              onClick={handleWriteReview}
              className="flex items-center gap-1 px-4 py-2 bg-white border border-indigo-500 text-indigo-600 rounded-md hover:bg-indigo-50 text-sm transition-colors duration-200 cursor-pointer"
            >
              <Pencil className="w-4 h-4" />
              수정
            </button>
          ) : (
            <button
              onClick={handleWriteReview}
              className="flex items-center gap-1 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 text-sm transition-colors duration-200 cursor-pointer"
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              리뷰 작성
            </button>
          )}
        </div>
      </div>
    );
  };