import { createBrowserRouter } from 'react-router-dom';
import { CustomerLogin } from '@/features/customer/pages/CustomerLogin';
import { CustomerLayout } from '@/features/customer/layouts/CustomerLayout';
import { CustomerMain } from '@/features/customer/pages/CustomerMain';
import { CustomerSignup } from '@/features/customer/pages/CustomerSignup';
import { ReservationStepOne } from '@/features/customer/pages/reservation/ReservationStepOne';
import ReservationRouteGuard from '@/features/customer/pages/reservation/ReservationRouteGuard';
import ReservationStepFinalGuard from '@/features/customer/pages/reservation/ReservationStepFinalGuard';
import { CustomerInquiryPage } from '@/features/customer/pages/customerInquiry/CustomerInquiryPage';
import { CustomerInquiryForm } from '@/features/customer/pages/customerInquiry/CustomerInquiryForm';
import { CustomerReviews } from '@/features/customer/pages/customerReview/CustomerReviews';
import { CustomerInquiryDetail } from '@/features/customer/pages/customerInquiry/CustomerInquiryDetail';


import { ManagerLayout } from '@/features/manager/layouts/ManagerLayout';
import { ManagerMain } from '@/features/manager/pages/ManagerMain';
import { ManagerLogin } from '@/features/manager/pages/ManagerLogin';
import { ManagerSignup } from '@/features/manager/pages/ManagerSignup';
import { ManagerReservations } from '@/features/manager/pages/ManagerReservation/ManagerReservations';
import { ManagerInquiries } from '@/features/manager/pages/ManagerInquiry/ManagerInquiries';
import { ManagerInquiryDetail } from '@/features/manager/pages/ManagerInquiry/ManagerInquiryDetail';
import { ManagerInquiryForm } from '@/features/manager/pages/ManagerInquiry/ManagerInquiryForm';
import { ManagerReviews } from '@/features/manager/pages/ManagerReview/ManagerReviews';
import { ManagerMy } from '@/features/manager/pages/ManagerMy/ManagerMy';
import { ManagerContractCancel } from '@/features/manager/pages/ManagerMy/ManagerContractCancel';
import { ManagerMyForm } from '@/features/manager/pages/ManagerMy/ManagerMyForm';
import { ManagerReservationDetail } from '@/features/manager/pages/ManagerReservation/ManagerReservationDetail';

import { AdminLogin } from '@/features/admin/pages/AdminLogin';
import { AdminLayout } from '@/features/admin/layouts/AdminLayout';
import { AdminMain } from '@/features/admin/pages/AdminMain';
import { AdminAccounts } from '@/features/admin/pages/AdminAccount/AdminAccounts';
import { AdminAccountForm } from '@/features/admin/pages/AdminAccount/AdminAccountForm';
import { AdminManagers } from '@/features/admin/pages/AdminManager/AdminManagers';
import { AdminCustomers } from '@/features/admin/pages/AdminCustomer/AdminCustomers';
import { AdminBoards } from '@/features/admin/pages/AdminBoard/AdminBoards';
import { AdminBanners } from '@/features/admin/pages/AdminBanner/AdminBanners';


import { GuardLayout } from '@/shared/components/GuardLayout';

export const router = createBrowserRouter([

  /** 로그인 경로 (가드 제외) */
  { path: '/auth/login', element: <CustomerLogin /> },
  /** 수요자 *************************************************************/
  {
    path: '/',
    element: <CustomerLayout />,
    children: [
      // 메인페이지
      { index: true, element: <CustomerMain /> },
      // 회원가입
      { path: 'auth/signup', element: <CustomerSignup /> },
      // 마이페이지
      {
        path: 'my',
        children: [
          {
            path: 'inquiries',
            children: [
              { index: true, element: <CustomerInquiryPage /> },
              { path: ':inquiryId', element: <CustomerInquiryDetail /> },
              { path: ':inquiryId/edit', element: <CustomerInquiryForm /> },
              { path: 'new', element: <CustomerInquiryForm /> }
            ]
          },
          {
            path: 'reviews',
            children: [
              { index: true, element: <CustomerReviews /> }
            ]
          }
        ]
      },
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
            { path: 'new', element: <ReservationStepOne /> },
            { path: ':reservationId/step-2', element: <ReservationRouteGuard /> },
            { path: ':reservationId/final', element: <ReservationStepFinalGuard /> } // Guard 적용
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
      { path: 'login', element: <ManagerLogin /> },
      { path: 'signup', element: <ManagerSignup /> },
    ]
  },
  {
    path: '/admin/auth/login',
    children: [
      { index: true, element: <AdminLogin /> },
    ]
  },

  /** 공통 가드 적용 구역 */
  {
    path: '/',
    element: <GuardLayout />,
    children: [
      /** 수요자 *******************************************/
      {
        path: '/',
        element: <CustomerLayout />,
        children: [
          { index: true, element: <CustomerMain /> },
          { path: 'auth/signup', element: <CustomerSignup /> },
          {
            path: 'reservations',
            children: [
              { path: 'new', element: <ReservationStepOne /> },
              { path: ':reservationId/step-2', element: <ReservationRouteGuard /> },
              { path: ':reservationId/final', element: <ReservationStepFinalGuard /> }
            ]
          }
        ]
      },

      /** 매니저 *******************************************/
      {
        path: '/managers',
        element: <ManagerLayout />,
        children: [
          { index: true, element: <ManagerMain /> },
          {
            path: 'my',
            children: [
              { index: true, element: <ManagerMy /> },
              { path: 'edit', element: <ManagerMyForm /> },
              { path: 'contract-cancel', element: <ManagerContractCancel /> },
            ]
          },
          {
            path: 'reservations',
            children: [
              { index: true, element: <ManagerReservations /> },
              { path: ':reservationId', element: <ManagerReservationDetail /> },
            ]
          },
          { path: 'reviews', element: <ManagerReviews /> },
          {
            path: 'inquiries',
            children: [
              { index: true, element: <ManagerInquiries /> },
              { path: ':inquiryId', element: <ManagerInquiryDetail /> },
              { path: 'new', element: <ManagerInquiryForm /> },
              { path: ':inquiryId/edit', element: <ManagerInquiryForm /> },
            ]
          },
        ]
      },

      /** 관리자 *******************************************/
      {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminMain /> },
          {
            path: 'accounts',
            children: [
              { index: true, element: <AdminAccounts /> },
              { path: 'new', element: <AdminAccountForm /> },
              { path: ':adminId/edit', element: <AdminAccountForm /> },
            ]
          },
          {
            path: 'customers',
            children: [
              { index: true, element: <AdminCustomers /> },
            ]
          },
          {
            path: 'managers',
            children: [
              { index: true, element: <AdminManagers /> },
            ]
          },
          {
            path: 'boards',
            children: [
              { index: true, element: <AdminBoards /> },
            ]
          },
          {
            path: 'banners',
            children: [
              { index: true, element: <AdminBanners /> },
            ]
          },
        ]
      },
    ]
  },
]);
