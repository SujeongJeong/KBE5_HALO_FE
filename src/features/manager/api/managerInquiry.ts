import api from "@/services/axios";
import type { ManagerInquiryDetail, CreateManagerInquiryRequest, UpdateManagerInquiryRequest } from "@/features/manager/types/ManagerInquirylType";

// 문의사항 목록 조회
export const searchManagerInquiries = async (params: {
  fromCreatedAt?: string;
  toCreatedAt?: string;
  replyStatus?: string;
  titleKeyword?: string;
  contentKeyword?: string;
  page: number;
  size: number;
}) => {
  // 불필요한 빈 문자열 제거
  const cleanedParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== ""
    )
  );

  const res = await api.get("/managers/inquiries", { params: cleanedParams });

  if (!res.data.success) {
    // 명시적으로 실패 처리
    throw new Error(res.data.message || "문의사항 목록 조회에 실패했습니다.");
  }

  return res.data.body;
};

// 문의사항 상세 조회
export const getManagerInquiry = async (inquiryId: number): Promise<ManagerInquiryDetail> => {
  const res = await api.get(`/managers/inquiries/${inquiryId}`);

  if (!res.data.success) {
    // 명시적으로 실패 처리
    throw new Error(res.data.message || "문의사항 상세 조회에 실패했습니다.");
  }

  return res.data.body;
};


// 문의사항 등록
export const createManagerInquiry = async (data: CreateManagerInquiryRequest) => {
  const res = await api.post("/managers/inquiries", data);

  if (!res.data.success) {
    // 명시적으로 실패 처리
    throw new Error(res.data.message || "문의사항 등록에 실패했습니다.");
  }

  return res.data.body;
};

// 문의사항 수정
export const updateManagerInquiry = async (
  inquiryId: number,
  data: UpdateManagerInquiryRequest
) => {
  const res = await api.patch(`/managers/inquiries/${inquiryId}`, data);

  if (!res.data.success) {
    throw new Error(res.data.message || "문의사항 수정에 실패했습니다.");
  }

  return res.data.body;
};

// 문의사항 삭제
export const deleteManagerInquiry = async(inquiryId: number) => {
  const res = await api.delete(`/managers/inquiries/${inquiryId}`);

  if (!res.data.success) {
    // 명시적으로 실패 처리
    throw new Error(res.data.message || "문의사항 삭제에 실패했습니다.");
  }

  return res.data.body;
};