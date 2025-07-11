import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import { UserRound } from 'lucide-react'
import type { ReservationConfirmRspType } from '@/features/customer/types/CustomerReservationType'

// 체크 이모지
const CheckCircleIcon: React.FC<{ colorClass?: string }> = ({
  colorClass = 'text-green-100'
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`h-16 w-16 ${colorClass}`}>
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.532-1.755-1.755a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
)

const ReservationStepFinal: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { headerRef } = useOutletContext<{
    headerRef: React.RefObject<{ refreshPoint: () => void }>
  }>()
  // location.state에서 결제 완료 데이터를 가져옵니다.
  const finalReservationData = location.state as ReservationConfirmRspType

  // 상태 관리 (필요에 따라 추가)
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    // Guard에서 이미 검증했으므로 데이터가 있다고 가정
    if (finalReservationData) {
      setDataLoaded(true)
      if (
        (
          finalReservationData as ReservationConfirmRspType & {
            paymentMethod?: string
          }
        ).paymentMethod === 'POINT'
      ) {
        headerRef?.current?.refreshPoint()
      }
    }
  }, [finalReservationData, headerRef])

  // 시간 함수
  const formatReservationTime = (
    startTime?: string,
    turnaround?: number
  ): string => {
    if (!startTime || !turnaround) return '-'

    const [hourStr, minuteStr] = startTime.split(':')
    const startHour = parseInt(hourStr, 10)
    const startMinute = parseInt(minuteStr, 10)

    const endDate = new Date()
    endDate.setHours(startHour)
    endDate.setMinutes(startMinute + turnaround * 60)

    const endHour = String(endDate.getHours()).padStart(2, '0')
    const endMinute = String(endDate.getMinutes()).padStart(2, '0')

    return `${startHour.toString().padStart(2, '0')}:${minuteStr} ~ ${endHour}:${endMinute} (${turnaround}시간)`
  }

  if (!dataLoaded) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>예약 정보를 불러오는 중입니다...</p>
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col items-center px-16">
      <div className="flex w-full max-w-[800px] flex-col items-center gap-3 rounded-xl bg-white p-8">
        <CheckCircleIcon colorClass="text-indigo-400" />
        <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">
          예약이 완료되었습니다
        </h2>
        <p className="mb-6 text-center text-base text-gray-600">
          예약 내역은 마이페이지에서 확인하실 수 있습니다
        </p>

        {/* 예약 정보 요약 카드 */}
        <div className="flex w-full flex-col gap-6 rounded-lg border border-gray-200 bg-white p-6">
          {/* 예약 번호 및 예약 상태 */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
              예약 확정
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {/* 서비스 정보 섹션 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-gray-900">
                서비스 정보
              </h3>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">서비스 종류</span>
                <span className="font-medium text-gray-900">
                  {finalReservationData.serviceName || '-'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">서비스 날짜</span>
                <span className="font-medium text-gray-900">
                  {finalReservationData.requestDate || '-'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">서비스 시간</span>
                <span className="font-medium text-gray-900">
                  {formatReservationTime(
                    finalReservationData.startTime,
                    finalReservationData.turnaround
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">서비스 주소</span>
                <span className="text-right font-medium text-gray-900">
                  {finalReservationData.roadAddress}
                  <br />
                  {finalReservationData.detailAddress}
                </span>
              </div>
            </div>

            {/* 담당 매니저 섹션 */}
            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                담당 매니저
              </h3>
              <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                {(
                  finalReservationData as ReservationConfirmRspType & {
                    profileImagePath?: string
                  }
                ).profileImagePath ? (
                  <img
                    src={
                      (
                        finalReservationData as ReservationConfirmRspType & {
                          profileImagePath?: string
                        }
                      ).profileImagePath
                    }
                    alt="매니저 프로필"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <UserRound className="h-10 w-10 text-gray-400" />
                )}
              </div>
              <div className="text-base font-semibold text-gray-900">
                {finalReservationData.managerName} 매니저
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4" />

          {/* 결제 정보 섹션 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray-900">결제 정보</h3>

            {/* 메인 서비스 */}
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-gray-600">메인 서비스</span>
              <span />
            </div>
            <div className="flex justify-between pl-4 text-sm">
              <span className="text-gray-500">
                {finalReservationData.serviceName}
                <span className="text-gray-500">
                  {' '}
                  {finalReservationData.turnaround}시간
                </span>
              </span>
              <span className="font-medium text-gray-900">
                {finalReservationData.price.toLocaleString()}원
              </span>
            </div>

            {/* 추가 서비스 */}
            {(
              finalReservationData as ReservationConfirmRspType & {
                extraServiceList?: Array<{
                  extraServiceName: string
                  extraServiceTime: number
                  extraServicePrice: number
                }>
              }
            ).extraServiceList &&
              (
                finalReservationData as ReservationConfirmRspType & {
                  extraServiceList?: Array<{
                    extraServiceName: string
                    extraServiceTime: number
                    extraServicePrice: number
                  }>
                }
              ).extraServiceList!.length > 0 && (
                <>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-600">
                      추가 서비스
                    </span>
                    <span />
                  </div>
                  {(
                    finalReservationData as ReservationConfirmRspType & {
                      extraServiceList?: Array<{
                        extraServiceName: string
                        extraServiceTime: number
                        extraServicePrice: number
                      }>
                    }
                  ).extraServiceList?.map(
                    (
                      service: {
                        extraServiceName: string
                        extraServiceTime: number
                        extraServicePrice: number
                      },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="flex justify-between pl-4 text-sm">
                        <span className="text-gray-500">
                          {service.extraServiceName}
                          {service.extraServiceTime > 0 && (
                            <span className="text-gray-500">
                              {' '}
                              {service.extraServiceTime}시간
                            </span>
                          )}
                        </span>
                        <span className="font-medium text-gray-900">
                          {service.extraServicePrice?.toLocaleString()}원
                        </span>
                      </div>
                    )
                  )}
                </>
              )}

            {/* 총 결제 금액 */}
            <div className="my-3 border-t border-gray-200" />
            <div className="flex justify-between text-base font-semibold">
              <span className="text-gray-900">총 결제 금액</span>
              <span className="text-lg font-bold text-indigo-600">
                {finalReservationData.price?.toLocaleString() || 0}원
              </span>
            </div>
            {/* 결제 방법 */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">결제 수단</span>
              <span className="font-medium text-gray-900">
                {(
                  finalReservationData as ReservationConfirmRspType & {
                    paymentMethod?: string
                  }
                ).paymentMethod === 'POINT'
                  ? '포인트'
                  : (
                      finalReservationData as ReservationConfirmRspType & {
                        paymentMethod?: string
                      }
                    ).paymentMethod || '-'}
              </span>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4" />

          {/* 취소 및 환불 정책 섹션 
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gray-900">취소 및 환불 정책</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {finalReservationData.cancellationPolicy?.map((policy, index) => (
                <li key={index}>{policy}</li>
              ))}
            </ul>
          </div>*/}
        </div>

        {/* 하단 버튼 */}
        <div className="mt-4 flex w-full justify-center gap-3">
          <button
            onClick={() =>
              navigate(`/my/reservations/${finalReservationData.reservationId}`)
            } // 마이페이지 예약 내역으로 이동
            className="flex h-12 w-48 items-center justify-center rounded-lg bg-gray-200 text-base font-semibold text-gray-700 hover:bg-gray-300">
            예약 내역 확인
          </button>
          <button
            onClick={() => navigate('/')} // 홈으로 이동
            className="flex h-12 w-48 items-center justify-center rounded-lg bg-indigo-600 text-base font-semibold text-white hover:bg-indigo-700">
            홈으로 이동
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReservationStepFinal
