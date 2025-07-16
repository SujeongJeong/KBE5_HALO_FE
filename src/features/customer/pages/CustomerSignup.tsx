import React, { useEffect, useState } from 'react'
import { signupCustomer } from '@/features/customer/api/customerAuth'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  isValidPhone,
  isValidEmail,
  isValidPassword
} from '@/shared/utils/validation'
import { formatPhoneNumber } from '@/shared/utils/format'
import { Eye, EyeOff } from 'lucide-react'
import type { CustomerSignupReq } from '../types/CustomerSignupType'
import AddressSearch from '@/shared/components/AddressSearch'
import ErrorToast from '@/shared/components/ui/toast/ErrorToast'
import SuccessToast from '@/shared/components/ui/toast/SuccessToast'
import { PrivacyPolicyModal } from '../modal/PrivacyPolicyModal'
import BirthDateCalendar from '@/shared/components/ui/BirthDateCalendar'

// BirthDateCalendar 컴포넌트에서 기본값을 자동으로 설정하므로 제거

interface CustomerSignupForm extends CustomerSignupReq {
  termsAgreed: boolean
}

export const CustomerSignup: React.FC = () => {
  const [form, setForm] = useState<CustomerSignupForm>({
    email: '',
    password: '',
    userName: '',
    birthDate: '', // BirthDateCalendar가 자동으로 기본값 설정
    gender: 'MALE',
    phone: '',
    roadAddress: '',
    detailAddress: '',
    latitude: 0,
    longitude: 0,
    termsAgreed: false
  })

  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [errorToast, setErrorToast] = useState({ open: false, message: '' })
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successToast, setSuccessToast] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const isOAuth = searchParams.get('oauth') === '1'
  const provider = searchParams.get('provider') || ''
  const providerId = searchParams.get('providerId') || ''

  useEffect(() => {
    // 소셜 로그인으로 온 경우 쿼리에서 name, email, password 값을 읽어 초기값으로 반영
    const newName = searchParams.get('name') || ''
    const newEmail = searchParams.get('email') || ''
    const newPassword = searchParams.get('password') || ''

    setForm(prev => ({
      ...prev,
      userName: newName || prev.userName,
      email: newEmail || prev.email,
      password: newPassword || prev.password
    }))
  }, [])

  useEffect(() => {
    setForm(prev => ({
      ...prev,
      roadAddress: '',
      detailAddress: '',
      latitude: 0,
      longitude: 0
    }))
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // 좌표 정보 업데이트 핸들러
  const handleCoordinatesChange = (lat: number, lng: number) => {
    setForm(prev => ({
      ...prev,
      latitude: lat,
      longitude: lng
    }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!form.phone.trim()) newErrors.phone = '연락처를 입력해주세요.'
    if (!newErrors.phone && !isValidPhone(form.phone))
      newErrors.phoneFormat = '연락처 형식이 올바르지 않습니다.'
    if (form.email.trim() && !isValidEmail(form.email))
      newErrors.emailFormat = '이메일 형식이 올바르지 않습니다.'
    // provider, providerId가 없을 때만 비밀번호 검증
    if (!(provider && providerId) && !isValidPassword(form.password)) {
      newErrors.password =
        '8~20자, 대소문자/숫자/특수문자 중 3가지 이상 포함해야 합니다.'
    }
    if (!form.userName.trim()) newErrors.userName = '이름을 입력해주세요.'
    if (!form.birthDate) newErrors.birthDate = '생년월일을 선택해주세요.'
    if (!form.gender) newErrors.gender = '성별을 선택해주세요.'
    if (!form.roadAddress) newErrors.roadAddress = '도로명 주소를 입력해주세요.'
    if (!form.detailAddress)
      newErrors.detailAddress = '상세 주소를 입력해주세요.'
    if (!form.latitude || !form.longitude) {
      newErrors.address = '주소를 다시 검색해주세요.'
    }
    if (!form.termsAgreed) newErrors.termsAgreed = '이용약관에 동의해주세요.'

    setErrors(newErrors)

    // 첫 번째 에러를 ErrorToast로 표시
    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.values(newErrors)[0]
      setErrorToast({ open: true, message: firstError })
    }

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) return

    const isValid = validate()

    if (!isValid) return

    // 좌표 정보 재확인
    if (!form.latitude || !form.longitude) {
      setErrorToast({ open: true, message: '주소를 다시 선택해주세요.' })
      return
    }

    const payload: CustomerSignupReq = {
      ...form,
      ...(provider && providerId ? { provider, providerId } : {})
    }

    try {
      setIsSubmitting(true)
      await signupCustomer(payload)
      setSuccessToast(true)
    } catch (error: unknown) {
      const message =
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message || '회원가입에 실패했습니다.'
      setErrorToast({ open: true, message })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex w-full justify-center px-4 py-12">
      <SuccessToast
        open={successToast}
        message="회원가입이 완료되었습니다! 로그인 페이지로 이동합니다."
        onClose={() =>
          navigate('/auth/login', { state: { signupSuccess: true } })
        }
      />
      <ErrorToast
        open={errorToast.open}
        message={errorToast.message}
        onClose={() => setErrorToast({ open: false, message: '' })}
      />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[640px] space-y-6 rounded-xl px-10 py-12 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-zinc-800">
          회원가입
        </h2>
        <p className="text-center text-sm text-zinc-500">
          HaloCare 서비스를 이용하기 위한 계정을 만들어주세요
        </p>

        {/* 연락처 */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-1 text-sm font-bold text-zinc-800">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            placeholder="숫자만 입력하세요 (예: 01012345678)"
            value={form.phone}
            disabled={isSubmitting}
            onChange={e =>
              setForm(prev => ({
                ...prev,
                phone: formatPhoneNumber(e.target.value)
              }))
            }
          />
        </div>

        {/* 이메일 (선택) */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-1 text-sm font-bold text-zinc-800">
            이메일 <span className="text-xs text-gray-400">(선택)</span>
          </label>
          <input
            name="email"
            className={`h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200${isOAuth ? 'cursor-not-allowed bg-slate-100' : ''}`}
            value={form.email}
            disabled={isSubmitting}
            onChange={handleChange}
            placeholder="example@email.com"
            readOnly={isOAuth}
          />
          {isOAuth && (
            <span className="mt-1 text-xs text-gray-400">
              소셜 로그인으로 입력된 정보는 수정할 수 없습니다.
            </span>
          )}
        </div>

        {/* 비밀번호 */}
        <div className="relative flex flex-col gap-2">
          <label className="flex items-center gap-1 text-sm font-bold text-zinc-800">
            비밀번호 <span className="text-red-500">*</span>
          </label>
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            className={`h-11 w-full rounded-lg border border-gray-300 bg-white px-4 pr-10 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200${isOAuth ? 'cursor-not-allowed bg-slate-100' : ''}`}
            value={form.password}
            disabled={isSubmitting || !!(provider && providerId)}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
            readOnly={isOAuth || !!(provider && providerId)}
          />
          {isOAuth && (
            <span className="mt-1 text-xs text-gray-400">
              소셜 로그인으로 입력된 정보는 수정할 수 없습니다.
            </span>
          )}
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute top-9 right-3">
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>

        {/* 이름 */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-1 text-sm font-bold text-zinc-800">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            name="userName"
            className={`h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200${isOAuth ? 'cursor-not-allowed bg-slate-100' : ''}`}
            value={form.userName}
            disabled={isSubmitting}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
            readOnly={isOAuth}
          />
          {isOAuth && (
            <span className="mt-1 text-xs text-gray-400">
              소셜 로그인으로 입력된 정보는 수정할 수 없습니다.
            </span>
          )}
        </div>

        {/* 생년월일 + 성별 */}
        <div className="flex gap-3">
          <div className="flex flex-1 flex-col gap-2">
            <label className="flex items-center gap-1 text-sm font-bold text-zinc-800">
              생년월일 <span className="text-red-500">*</span>
            </label>
            <BirthDateCalendar
              selectedDate={form.birthDate}
              onDateChange={date => {
                setForm(prev => ({ ...prev, birthDate: date }))
                setErrors(prev => ({ ...prev, birthDate: '' }))
              }}
            />
            {errors.birthDate && (
              <p className="text-xs text-red-500">{errors.birthDate}</p>
            )}
          </div>
          <div className="flex w-28 flex-col gap-2">
            <label className="flex items-center gap-1 text-sm font-bold text-zinc-800">
              성별 <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={form.gender}
              disabled={isSubmitting}
              onChange={handleChange}
              className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
              <option value="MALE">남</option>
              <option value="FEMALE">여</option>
            </select>
            {errors.gender && (
              <p className="text-xs text-red-500">{errors.gender}</p>
            )}
          </div>
        </div>

        {/* 주소 - 수정된 부분 */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-1 text-sm font-bold text-zinc-800">
            주소 <span className="text-red-500">*</span>
          </label>
          <AddressSearch
            roadAddress={form.roadAddress}
            detailAddress={form.detailAddress}
            setRoadAddress={val => {
              setForm(prev => ({ ...prev, roadAddress: val }))
            }}
            setDetailAddress={val => {
              setForm(prev => ({ ...prev, detailAddress: val }))
            }}
            onCoordinatesChange={handleCoordinatesChange}
            onAddressChange={(roadAddress, detailAddress, lat, lng) => {
              setForm(prev => ({
                ...prev,
                roadAddress,
                detailAddress,
                latitude: lat,
                longitude: lng
              }))
            }}
          />
        </div>

        {/* 약관 동의 */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="termsAgreed"
            name="termsAgreed"
            checked={form.termsAgreed}
            disabled={isSubmitting}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600"
          />
          <label
            htmlFor="termsAgreed"
            className="cursor-pointer text-sm text-gray-600">
            이용약관 및{' '}
            <span
              className="cursor-pointer font-medium text-indigo-600 hover:underline"
              onClick={e => {
                e.preventDefault()
                setIsPrivacyModalOpen(true)
              }}>
              개인정보처리방침
            </span>
            에 동의합니다.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-md bg-indigo-600 font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400">
          {isSubmitting ? '가입 중...' : '가입하기'}
        </button>

        <p className="text-center text-sm text-zinc-500">
          이미 계정이 있으신가요?{' '}
          <a
            href="/auth/login"
            className="font-medium text-indigo-600 hover:underline">
            로그인
          </a>
        </p>
      </form>

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  )
}
