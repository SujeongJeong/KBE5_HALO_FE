// 고객 문의사항 목록 조회
export interface SearchCustomerInquiries {
  inquiryId: number;
  title: string;
  createdAt: string;
  isReplied: boolean;
  categoryName: string;
}

// 고객 문의사항 상세 조회
export interface CustomerInquiryDetail {
  inquiryId: number;
  authorId: number;
  title: string;
  content: string;
  fileId?: number | null;
  files?: File[];
  createdAt: string;
  categoryName: string;
  author?: {
    userName?: string;
    phone?: string;
    email?: string;
  };
  // 답변 관련 필드
  answerId?: number | null;
  replyContent?: string;
  replyFileId?: number | null;
  replyCreatedAt?: string | null;
  replyStatus?: boolean | false;
}

// 고객 답변 조회
export interface CustomerInquiryAnswer {
  answerId: number;
  inquiryId: number;
  replyContent: string;
  replyFileId?: number | null;
  replyCreatedAt: string;
}

// 고객 답변 등록
export interface CreateCustomerInquiryAnswerRequest {
  inquiryId: number;
  replyContent: string;
  replyFileId?: number;
}

// 고객 답변 수정
export interface UpdateCustomerInquiryAnswerRequest {
  answerId: number;
  replyContent: string;
  replyFileId?: number;
} 