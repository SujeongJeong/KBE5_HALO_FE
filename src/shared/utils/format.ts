/**
 * 01012345678 → 010-1234-5678 형식으로 변환
 */
export const formatPhoneNumber = (value: string): string => {
  const rawValue = value.replace(/[^0-9]/g, "");

  if (rawValue.length < 4) {
    return rawValue;
  } else if (rawValue.length < 8) {
    return `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
  } else {
    return `${rawValue.slice(0, 3)}-${rawValue.slice(3, 7)}-${rawValue.slice(7, 11)}`;
  }
};