import { Fragment } from "react";

const CustomerFooter = () => {
  return (
    <Fragment>
      <div className="self-stretch px-28 py-14 bg-zinc-800 inline-flex flex-col justify-start items-start gap-10">
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="flex justify-start items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg inline-flex flex-col justify-center items-center">
              <div className="justify-start text-indigo-600 text-base font-bold font-['Inter'] leading-tight">H</div>
            </div>
            <div className="justify-start text-white text-xl font-bold font-['Inter'] leading-normal">HaloCare</div>
          </div>
          <div className="flex justify-end items-center gap-6">
            <div className="justify-start text-white text-sm font-normal font-['Inter'] leading-none">회사소개</div>
            <div className="justify-start text-white text-sm font-normal font-['Inter'] leading-none">고객센터</div>
            <div className="justify-start text-white text-sm font-normal font-['Inter'] leading-none">이용약관</div>
            <div className="justify-start text-white text-sm font-bold font-['Inter'] leading-none">개인정보처리방침</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-neutral-400 text-sm font-normal font-['Inter'] leading-none">주식회사 할로케어 | 대표: 홍길동 | 사업자등록번호: 123-45-67890</div>
          <div className="self-stretch justify-start text-neutral-400 text-sm font-normal font-['Inter'] leading-none">서울특별시 강남구 테헤란로 123 할로케어빌딩 8층</div>
          <div className="self-stretch justify-start text-neutral-400 text-sm font-normal font-['Inter'] leading-none">고객센터: 1588-1234 (평일 09:00-18:00, 주말/공휴일 휴무)</div>
          <div className="self-stretch justify-start text-neutral-400 text-sm font-normal font-['Inter'] leading-none">© 2023 HaloCare. All rights reserved.</div>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerFooter;