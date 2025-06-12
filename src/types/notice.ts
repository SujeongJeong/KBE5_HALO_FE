export type NoticeStatus = '게시중' | '임시저장';

export type NoticeType = 'notice' | 'event';

export interface Notice {
  id: string;
  title: string;
  status: NoticeStatus;
  author: string;
  createdAt: string;
  type: NoticeType;
}

export interface NoticeSearchParams {
  title?: string;
  status?: NoticeStatus;
  startDate?: string;
  endDate?: string;
  type?: NoticeType;
} 