import { createBrowserRouter } from 'react-router-dom';
import { CustomerLogin } from '@/features/customer/pages/CustomerLogin';
import { CustomerLayout } from '@/features/customer/layouts/CustomerLayout';
import { CustomerMain } from '@/features/customer/pages/CustomerMain';
import { CustomerSignup } from '@/features/customer/pages/CustomerSignup';
import { ReservationRequest } from '@/features/customer/pages/reservation/ReservationRequest';
import ReservationStepTwo from '@/features/customer/pages/reservation/ReservationStepTwo';

import { ManagerLayout } from '@/features/manager/layouts/ManagerLayout';
import { ManagerMain } from '@/features/manager/pages/ManagerMain';
import { ManagerLogin } from '@/features/manager/pages/ManagerLogin';
import { ManagerSignup } from '@/features/manager/pages/ManagerSignup';
import { ManagerReservations } from '@/features/manager/pages/ManagerReservations';
import { ManagerInquiries } from '@/features/manager/pages/ManagerInquiry/ManagerInquiries';

import { AdminLogin } from '@/features/admin/pages/AdminLogin';
import { AdminLayout } from '@/features/admin/layouts/AdminLayout';
import { AdminMain } from '@/features/admin/pages/AdminMain';
import { ManagerInquiryDetail } from '@/features/manager/pages/ManagerInquiry/ManagerInquiryDetail';
import { ManagerInquiryForm } from '@/features/manager/pages/ManagerInquiry/ManagerInquiryForm';
import { ManagerReviews } from '@/features/manager/pages/ManagerReview/ManagerReviews';
import { AdminAccounts } from '@/features/admin/pages/AdminAccount/AdminAccounts';
import { AdminAccountForm } from '@/features/admin/pages/AdminAccount/AdminAccountForm';
import { AdminManagers } from '@/features/admin/pages/AdminManager/AdminManagers';
import { AdminCustomers } from '@/features/admin/pages/AdminCustomer/AdminCustomers';
import { AdminBoards } from '@/features/admin/pages/AdminBoard/AdminBoards';
import { AdminBanners } from '@/features/admin/pages/AdminBanner/AdminBanners';
import { ManagerMy } from '@/features/manager/pages/ManagerMy/ManagerMy';
import { ManagerContractCancel } from '@/features/manager/pages/ManagerMy/ManagerContractCancel';
import { ManagerMyForm } from '@/features/manager/pages/ManagerMy/ManagerMyForm';


export const router = createBrowserRouter([
  /** 수요자 *************************************************************/
  {
    path: '/',
    element: <CustomerLayout />,
    children: [
      // 메인페이지
      { index: true, element: <CustomerMain /> },
      // 회원가입
      { path: 'auth/signup', element: <CustomerSignup /> },
      // 서비스 소개
      // { path: 'services', element: <CustomerService /> },
      // // 후기
      // { path: 'reviews', element: <CustomerReviews /> },
      // // 고객센터
      // { path: 'support', element: <CustomerSupport /> },
      // 예약 
      {
        path: 'reservations',
        children: [
          // 예약 요청 (step 1)
          { path: 'new', element: <ReservationRequest /> },
          // 예약 매니저 선택 (step 2)
          { path: ':reservationId/step-2', element: <ReservationStepTwo /> },
        ]
      },
    ],
  },

  /** 수요자 로그인 */
  {
    path: 'auth/login',
    element: <CustomerLogin />,
  },

  /** 매니저 *************************************************************/
  {
    path: '/managers/auth',
    children: [
      // 매니저 로그인
      { path: 'login', element: <ManagerLogin /> },
      // 매니저 회원가입
      { path: 'signup', element: <ManagerSignup /> },
    ],
  },
  {
    path: '/managers',
    element: <ManagerLayout />,
    children: [
      // 메인페이지 (= 대시보드)
      { index: true, element: <ManagerMain /> }, 
      // 마이페이지
      { 
        path: 'my',
        children: [
          // 목록
          { index: true, element: <ManagerMy /> },
          // 상세
          { path: 'edit', element: <ManagerMyForm /> },
          // 계약해지
          { path: 'contract-cancel', element: <ManagerContractCancel /> },
        ]
      },
      // // 예약 관리 목록
      { path: 'reservations', element: <ManagerReservations /> },
      // // 리뷰 관리 목록
      { path: 'reviews', element: <ManagerReviews /> },
      // 문의 내역
      { 
        path: 'inquiries',
        children: [
          // 목록
          { index: true, element: <ManagerInquiries /> },
          // 상세
          { path: ':inquiryId', element: <ManagerInquiryDetail /> },
          // 등록
          { path: 'new', element: <ManagerInquiryForm /> },
          // 수정
          { path: ':inquiryId/edit', element: <ManagerInquiryForm /> },
        ]
      },
      // // 급여 관리 목록
      // { path: 'payments', element: <ManagerPayments /> },
    ],
  },

  /** 관리자 *************************************************************/
  {
    path: '/admin/auth/login',
    children: [
      // 관리자 로그인
      { index: true, element: <AdminLogin /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      // 메인페이지 (= 대시보드)
      { index: true, element: <AdminMain /> }, 
      // 관리자 계정 목록
      { path: 'accounts',
        children: [
          // 목록
          { index: true, element: <AdminAccounts /> },
          // 등록
          { path: 'new', element: <AdminAccountForm /> },
          // 수정
          { path: ':adminId/edit', element: <AdminAccountForm /> },
        ]
      },
      // 고객 정보 목록
      { path: 'customers',
        children: [
          // 목록
          { index: true, element: <AdminCustomers /> },
          // 수정
          // { path: ':customerId/edit', element: <AdminCustomerForm /> },
        ]
      },
      // 매니저 정보 목록
      { path: 'managers',
        children: [
          // 목록
          { index: true, element: <AdminManagers /> },
          // 수정
          // { path: ':managerId/edit', element: <AdminManagerForm /> },
        ]
      },
      // // 문의 내역 목록
      // { path: 'inquiries', element: <AdminInquiries /> },
      // // 공지/이벤트 목록
      { path: 'boards',
        children: [
          // 목록
          { index: true, element: <AdminBoards /> },
          // { path: 'notices',
          //   children: [
          //     // 등록
          //     { path: 'new', element: <AdminNoticeForm /> },
          //     // 수정
          //     { path: ':noticeId/edit', element: <AdminNoticeForm /> },
          //   ]
          // },
          // { path: 'events',
          //   children: [
          //     // 등록
          //     { path: 'new', element: <AdminEventForm /> },
          //     // 수정
          //     { path: ':eventId/edit', element: <AdminEventForm /> },
          //   ]
          // },
        ]
      },
      // 배너 관리 목록
      { path: 'banners',
        children: [
          // 목록
          { index: true, element: <AdminBanners /> },
          // 등록
          // { path: 'new', element: <AdminBannerForm /> },
          // 수정
          // { path: ':bannerId/edit', element: <AdminBannerForm /> },
        ]
      },
    ],
  },
]);