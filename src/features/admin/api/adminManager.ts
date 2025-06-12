import api from '@/services/axios';

// 전체 매니저 목록 조회
export const fetchAdminManagers = async (params?: {
  userName?: string;
  phone?: string;
  email?: string;
  status?: string;
  minRating?: number;
  maxRating?: number;
  page?: number;
  size?: number;
}) => {
  const cleanedParams = Object.fromEntries(
    Object.entries(params || {}).filter(([, value]) => value !== undefined && value !== "")
  );
  const res = await api.get('/admin/managers', { params: cleanedParams });
  console.log(res.data.body);
  if (!res.data.success) throw new Error(res.data.message || '매니저 목록 조회에 실패했습니다.');
  return res.data.body;
};

// 단일 매니저 상세 조회
export const fetchAdminManagerById = async (managerId: string | number) => {
  const res = await api.get(`/admin/managers/${managerId}`);
  console.log(res.data.body);
  if (!res.data.success) throw new Error(res.data.message || '매니저 상세 조회에 실패했습니다.');
  return res.data.body;
};

// 신고된 매니저 목록 조회
export const fetchSuspendedManagers = async () => {
  const res = await api.get('/admin/managers/suspended');
  if (!res.data.success) throw new Error(res.data.message || '신고된 매니저 목록 조회에 실패했습니다.');
  return res.data.body;
};

// 매니저 신청 내역 조회
export const fetchAppliedManagers = async () => {
  const res = await api.get('/admin/managers/applies');
  if (!res.data.success) throw new Error(res.data.message || '매니저 신청 내역 조회에 실패했습니다.');
  return res.data.body;
}; 