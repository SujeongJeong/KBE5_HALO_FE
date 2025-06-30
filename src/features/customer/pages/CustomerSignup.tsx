import React, { useEffect, useState } from 'react';
import { signupCustomer } from '@/features/customer/api/customerAuth';
import { useNavigate } from 'react-router-dom';
import { isValidPhone, isValidEmail, isValidPassword } from '@/shared/utils/validation';
import { formatPhoneNumber } from '@/shared/utils/format';
import { Eye, EyeOff } from 'lucide-react';
import { useAddressStore } from '@/store/useAddressStore';
import type { CustomerSignupReq } from '../types/CustomerSignupType';
import AddressSearch from '@/shared/components/AddressSearch';

interface CustomerSignupForm extends CustomerSignupReq {
  termsAgreed: boolean;
}

export const CustomerSignup: React.FC = () => {
  const [form, setForm] = useState<Omit<CustomerSignupForm, 'roadAddress' | 'detailAddress' | 'latitude' | 'longitude'>>({
    email: '',
    password: '',
    userName: '',
    birthDate: '',
    gender: 'MALE',
    phone: '',
    termsAgreed: false,
  });
  
  const { roadAddress, latitude, longitude, detailAddress, setAddress } = useAddressStore(); // 주소 정보 상태 (Zustand에서 관리)
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  useEffect(() => {
    useAddressStore.getState().setAddress("", 0, 0, "");
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.phone.trim()) newErrors.phone = "연락처를 입력해주세요.";
    if (!newErrors.phone && !isValidPhone(form.phone)) newErrors.phoneFormat = "연락처 형식이 올바르지 않습니다.";
    if (form.email.trim() && !isValidEmail(form.email)) newErrors.emailFormat = "이메일 형식이 올바르지 않습니다.";
    if (!isValidPassword(form.password)) newErrors.password = "8~20자, 대소문자/숫자/특수문자 중 3가지 이상 포함해야 합니다.";
    if (!form.userName.trim()) newErrors.userName = '이름을 입력해주세요.';
    if (!form.birthDate) newErrors.birthDate = '생년월일을 선택해주세요.';
    if (!form.gender) newErrors.gender = '성별을 선택해주세요.';
    if (!roadAddress) newErrors.roadAddress = '도로명 주소를 입력해주세요.';
    if (!detailAddress) newErrors.detailAddress = '상세 주소를 입력해주세요.';
    if (!latitude || !longitude) newErrors.address = '주소를 다시 검색해주세요.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!validate()) return;
    if (!form.termsAgreed) { alert("이용약관에 동의해주세요."); return false; }
    if (!latitude || !longitude) return;
  
    const payload: CustomerSignupReq = {
      ...form,
      roadAddress,
      detailAddress,
      latitude: latitude,
      longitude: longitude,
    };
  
    try {
      await signupCustomer(payload);
      alert('회원가입 성공!');
      setAddress("", 0, 0, ""); // 주소 정보 초기화
      navigate('/auth/login');
    } catch (error) {
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <div className="w-full px-4 py-12 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[640px] bg-white shadow-lg rounded-xl px-10 py-12 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-zinc-800">회원가입</h2>
        <p className="text-center text-sm text-zinc-500">HaloCare 서비스를 이용하기 위한 계정을 만들어주세요</p>

        {/* 연락처 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-700">연락처</label>
          <input
            name="phone"
            type="tel"
            className="input"
            placeholder="숫자만 입력하세요 (예: 01012345678)"
            value={form.phone}
            onChange={(e) =>
              setForm(prev => ({
                ...prev,
                phone: formatPhoneNumber(e.target.value),
              }))
            }
          />
          {errors.phone && !form.phone && (
            <p className="text-red-500 text-xs">{errors.phone}</p>
          )}
          {errors.phoneFormat && (
            <p className="text-red-500 text-xs">{errors.phoneFormat}</p>
          )}
        </div>

        {/* 이메일 (선택) */}
        <div>
          <label className="text-sm font-medium text-zinc-700">이메일 <span className="text-xs text-gray-400">(선택)</span></label>
          <input
            name="email"
            className="input"
            value={form.email}
            onChange={handleChange}
            placeholder="example@email.com"
          />
          {form.email && errors.emailFormat && (
            <p className="text-red-500 text-xs">{errors.emailFormat}</p>
          )}
        </div>

        {/* 비밀번호 */}
        <div className="relative">
          <label className="text-sm font-medium text-zinc-700">비밀번호</label>
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            className="input pr-10"
            value={form.password}
            onChange={(e) => {
              handleChange(e);
              if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
            }}
            placeholder="영문, 숫자, 특수문자 조합 8자 이상"
          />
          <button type="button" onClick={() => setShowPassword(prev => !prev)} className="absolute right-3 top-9">
            {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
          </button>
          {errors.password && !form.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}
        </div>

        {/* 이름 */}
        <div>
          <label className="text-sm font-medium text-zinc-700">이름 (한글)</label>
          <input name="userName" className="input" value={form.userName} onChange={handleChange} placeholder="홍길동" />
          {errors.userName && !form.userName && (
            <p className="text-red-500 text-xs">{errors.userName}</p>
          )}
        </div>

        {/* 생년월일 + 성별 */}
        <div className="flex space-x-3">
          <div className="flex-1">
            <label className="text-sm font-medium text-zinc-700">생년월일</label>
            <input type="date" name="birthDate" className="input" value={form.birthDate} onChange={handleChange} />
            {errors.birthDate && !form.birthDate && (<p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>)}
          </div>
          <div className="w-28">
            <label className="text-sm font-medium text-zinc-700">성별</label>
            <select name="gender" value={form.gender} onChange={handleChange} className="input">
              <option value="MALE">남</option>
              <option value="FEMALE">여</option>
            </select>
            {errors.gender && !form.gender && (
              <p className="text-red-500 text-xs">{errors.gender}</p>
            )}
          </div>
        </div>

        {/* 주소 */}
        <AddressSearch
          roadAddress={roadAddress}
          detailAddress={detailAddress}
          errors={errors.address}
          setRoadAddress={(val) => setAddress(val, latitude ?? 0, longitude ?? 0, detailAddress)}
          setDetailAddress={(val) => setAddress(roadAddress, latitude ?? 0, longitude ?? 0, val)}
        />

        {/* 약관 동의 */}
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="termsAgreed" 
            name="termsAgreed"
            checked={form.termsAgreed}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
          <label htmlFor="terms" className="text-sm text-gray-600">
            이용약관 및 <span className="text-indigo-600 font-medium">개인정보처리방침</span>에 동의합니다.
          </label>
        </div>

        <button type="submit" className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md">
          가입하기
        </button>

        <p className="text-center text-sm text-zinc-500">
          이미 계정이 있으신가요?{' '}
          <a href="/customer/login" className="text-indigo-600 font-medium hover:underline">로그인</a>
        </p>
      </form>
    </div>
  );
};
