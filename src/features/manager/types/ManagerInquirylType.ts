// 문의사항 목록 조회
export interface SearchManagerInquiries {
  inquiryId: number;
  title: string;
  createdAt: string;
  isReplied: boolean;
}

// 문의사항 상세 조회
export interface ManagerInquiryDetail {
  inquiryId: number;
  authorId: number;
  title: string;
  content: string;
  fileId?: number | null;
  files?: File[];
  createdAt: string;

  // 답변 관련 필드
  answerId?: number | null;
  replyContent?: string;
  replyFileId?: number | null;
  replyCreatedAt?: string | null;
}

// 문의사항 등록
export interface CreateManagerInquiryRequest {
  title: string;
  content: string;
  fileId?: number;
  fileUrls?: string[]; // S3에서 받은 URL 목록
}

// 문의사항 수정
export interface UpdateManagerInquiryRequest {
  title: string;
  content: string;
  fileId?: number;
  fileUrls?: string[];
}