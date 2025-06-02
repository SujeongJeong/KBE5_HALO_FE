import { createBrowserRouter } from 'react-router-dom';

import { CustomerLogin } from '@/features/customer/pages/CustomerLogin';
import { CustomerLayout } from '@/features/customer/layouts/CustomerLayout';
import { CustomerMain } from '@/features/customer/pages/CustomerMain';
import { ManagerLayout } from '@/features/manager/layouts/ManagerLayout';
import { ManagerMain } from '@/features/manager/pages/ManagerMain';
import { ManagerSignup } from '@/features/manager/pages/ManagerSignup';
import { ManagerReservations } from '@/features/manager/pages/ManagerReservations';
import { ManagerInquiries } from '@/features/manager/pages/ManagerInquiries';
import { AdminLogin } from '@/features/admin/pages/AdminLogin';
import { AdminLayout } from '@/features/admin/layouts/AdminLayout';
import { AdminMain } from '@/features/admin/pages/AdminMain';
import { AdminAccount } from '@/features/admin/pages/AdminAccount';
import AddressSearch from '@/shared/components/AddressSearch';

export const router = createBrowserRouter([
  /** 수요자 *************************************************************/
  {
    path: '/',
    element: <CustomerLayout />,
    children: [
      // 메인페이지
      { index: true, element: <CustomerMain /> },
      // 서비스 소개
      // { path: 'services', element: <CustomerService /> },
      // // 후기
      // { path: 'reviews', element: <CustomerReviews /> },
      // // 고객센터
      // { path: 'support', element: <CustomerSupport /> },
    ],
  },

  /** 수요자 로그인 */
  {
    path: '/login',
    element: <CustomerLogin />,
  },

  /** 매니저 *************************************************************/
  {
    path: '/managers',
    children: [
      // 매니저 로그인
      // { index: true, element: <ManagerLogin /> },
      // {path: 'login', element: <ManagerLogin /> },
      {path: 'signup', element: <ManagerSignup /> },
    ],
  },
  {
    path: '/managers',
    element: <ManagerLayout />,
    children: [
      // 메인페이지 (= 대시보드)
      { index: true, element: <ManagerMain /> }, 
      // 마이페이지
      // { path: 'my', element: <ManagerMy /> },
      // // 예약 관리 목록
      { path: 'reservations', element: <ManagerReservations /> },
      // // 리뷰 관리 목록
      // { path: 'reviews', element: <ManagerReviews /> },
      // 문의 내역 목록
      { path: 'inquiries', element: <ManagerInquiries /> },
      // // 급여 관리 목록
      // { path: 'payments', element: <ManagerPayments /> },
    ],
  },

  /** 관리자 *************************************************************/
  {
    path: '/admins/login',
    children: [
      // 관리자 로그인
      { index: true, element: <AdminLogin /> },
    ],
  },
  {
    path: '/admins',
    element: <AdminLayout />,
    children: [
      // 메인페이지 (= 대시보드)
      { index: true, element: <AdminMain /> }, 
      // 관리자 계정 목록
      { path: 'accounts', element: <AdminAccount /> },
      // 고객 정보 목록
      // { path: 'customers', element: <AdminCustomers /> },
      // // 매니저 정보 목록
      // { path: 'managers', element: <AdminManagers /> },
      // // 문의 내역 목록
      // { path: 'inquiries', element: <AdminInquiries /> },
      // // 공지/이벤트 목록
      // { path: 'notices', element: <AdminNotices /> },
      // // 배너 관리 목록
      // { path: 'banners', element: <AdminBanners /> },
    ],
  },

  /** 구글맵 테스트 *************************************************************/
  {
    path: '/googleMap',
    children: [
      { index: true, element: <AddressSearch /> },
    ],
  }
]);