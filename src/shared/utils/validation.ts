// 연락처 유효성 검사 (010-1234-5678 형식)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^010-\d{4}-\d{4}$/;
  return phoneRegex.test(phone);
};

// 비밀번호 유효성 검사 (8~20자, 대/소문자/숫자/특수문자 중 3가지 이상 포함)
export const isValidPassword = (password: string): boolean => {
  const lengthValid = password.length >= 8 && password.length <= 20;

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const fulfilledTypes = [hasUppercase, hasLowercase, hasDigit, hasSpecialChar].filter(Boolean).length;

  return lengthValid && fulfilledTypes >= 3;
};
