import { Fragment } from "react/jsx-runtime";

export const ManagerSignup = () => {

  return (
    <Fragment>
      <div className="w-[1280px] h-[2066px] p-10 bg-slate-50 inline-flex justify-center items-start">
        <div className="w-[800px] h-[1980px] relative bg-white rounded-xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)]">
          <div className="w-[720px] h-12 left-[40px] top-[1888px] absolute bg-indigo-600 rounded-lg inline-flex justify-center items-center">
            <div className="justify-start text-white text-base font-semibold font-['Inter'] leading-tight">회원가입</div>
          </div>
          <div className="w-[720px] left-[40px] top-[1844px] absolute inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-4 left-[2px] top-[2px] absolute bg-white outline outline-2 outline-offset-[-1px] outline-slate-300" />
              </div>
              <div className="justify-start text-slate-700 text-sm font-normal font-['Inter'] leading-none">이용약관 및 개인정보 처리방침에 동의합니다</div>
            </div>
          </div>
          <div className="w-[720px] h-[1696px] left-[40px] top-[134px] absolute inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">기본 정보</div>
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">이메일 *</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">이메일 주소</div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">비밀번호 *</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">비밀번호</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">이름 *</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">이름</div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">생년월일 *</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">YYYY-MM-DD</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">성별 *</div>
                  <div className="self-stretch h-12 inline-flex justify-start items-center gap-3">
                    <div className="flex-1 h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center">
                      <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">남</div>
                    </div>
                    <div className="flex-1 h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center">
                      <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">여</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">연락처 *</div>
                  <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">010-0000-0000</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">주소 *</div>
                <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                  <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">도로명주소</div>
                </div>
                <div className="self-stretch h-12 px-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center">
                  <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">상세주소</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[1270px] flex flex-col justify-start items-start gap-4">
              <div className="self-stretch justify-start text-slate-800 text-lg font-semibold font-['Inter'] leading-snug">프로필 정보</div>
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="w-28 h-28 bg-slate-100 rounded-[60px] flex justify-center items-center">
                  <div className="w-10 h-10 relative overflow-hidden">
                    <div className="w-14 h-14 left-[3.40px] top-[2.50px] absolute bg-slate-300" />
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-center items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">프로필 사진</div>
                  <div className="w-40 h-10 px-4 bg-slate-50 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-center items-center">
                    <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">파일 선택</div>
                  </div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-none">JPG, PNG 파일 (최대 5MB)</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">첨부파일</div>
                <div className="self-stretch p-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex-1 flex justify-start items-center gap-2">
                      <div className="w-5 h-5 relative overflow-hidden">
                        <div className="w-3.5 h-4 left-[3px] top-[2px] absolute bg-slate-500" />
                      </div>
                      <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">경력증명서.pdf</div>
                    </div>
                    <div className="w-5 h-5 relative overflow-hidden">
                      <div className="w-3.5 h-4 left-[5px] top-[3px] absolute bg-red-500" />
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex-1 flex justify-start items-center gap-2">
                      <div className="w-5 h-5 relative overflow-hidden">
                        <div className="w-3.5 h-4 left-[3px] top-[2px] absolute bg-slate-500" />
                      </div>
                      <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">자격증.jpg</div>
                    </div>
                    <div className="w-5 h-5 relative overflow-hidden">
                      <div className="w-3.5 h-4 left-[5px] top-[3px] absolute bg-red-500" />
                    </div>
                  </div>
                  <div className="self-stretch h-12 px-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-blue-500 inline-flex justify-center items-center gap-2">
                    <div className="w-5 h-5 relative overflow-hidden">
                      <div className="w-3.5 h-3.5 left-[5px] top-[5px] absolute bg-indigo-600" />
                    </div>
                    <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">파일 추가하기</div>
                  </div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-none">PDF, JPG, PNG 파일 (각 최대 10MB)</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">한줄소개 *</div>
                  <div className="self-stretch h-20 px-4 py-3 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-start">
                    <div className="justify-start text-slate-400 text-sm font-normal font-['Inter'] leading-none">자신을 소개하는 한 줄을 작성해주세요</div>
                  </div>
                </div>
              </div>
              <div className="w-[718px] h-[658px] flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">업무 가능 시간 *</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-none">가능한 시간대를 선택해주세요 (클릭하여 선택, 드래그하여 범위 선택 가능)</div>
                </div>
                <div className="self-stretch h-[544px] p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch h-10 border-b border-slate-200 inline-flex justify-start items-center">
                    <div className="w-14 h-10 border-r border-slate-200 flex justify-center items-center">
                      <div className="justify-start text-slate-700 text-sm font-semibold font-['Inter'] leading-none">시간</div>
                    </div>
                    <div className="flex-1 h-10 flex justify-start items-center">
                      <div className="flex-1 h-10 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">월</div>
                      </div>
                      <div className="flex-1 h-10 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">화</div>
                      </div>
                      <div className="flex-1 h-10 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">수</div>
                      </div>
                      <div className="flex-1 h-10 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">목</div>
                      </div>
                      <div className="flex-1 h-10 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">금</div>
                      </div>
                      <div className="flex-1 h-10 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">토</div>
                      </div>
                      <div className="flex-1 h-10 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">일</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-96 flex flex-col justify-start items-start">
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">00시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">00시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">00시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">00시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">00시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">00시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">00시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">00시</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">01시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">01시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">01시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">01시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">01시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">01시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">01시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">01시</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">09시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-indigo-100 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">09시</div>
                        </div>
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">09시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">09시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">09시</div>
                        </div>
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">09시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">09시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">09시</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">10시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">10시</div>
                        </div>
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">10시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">10시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">10시</div>
                        </div>
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">10시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">10시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">10시</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">11시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">11시</div>
                        </div>
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">11시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">11시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">11시</div>
                        </div>
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">11시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">11시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">11시</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">12시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">12시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">12시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">12시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">12시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">12시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">12시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">12시</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">13시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">13시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">13시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">13시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">13시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">13시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">13시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">13시</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">14시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">14시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">14시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">14시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">14시</div>
                        </div>
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">14시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">14시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">14시</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">15시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">15시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">15시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">15시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">15시</div>
                        </div>
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">15시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">15시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">15시</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">16시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">16시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">16시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">16시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">16시</div>
                        </div>
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">16시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">16시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">16시</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">17시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">17시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">17시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">17시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">17시</div>
                        </div>
                        <div className="flex-1 h-9 bg-indigo-100 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-indigo-600 text-sm font-medium font-['Inter'] leading-none">17시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">17시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">17시</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 border-b border-slate-200 inline-flex justify-start items-center">
                      <div className="w-14 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                        <div className="justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">18시</div>
                      </div>
                      <div className="flex-1 h-9 flex justify-start items-center">
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">18시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">18시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">18시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">18시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">18시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">18시</div>
                        </div>
                        <div className="flex-1 h-9 bg-slate-50 border-r border-slate-200 flex justify-center items-center">
                          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-none">18시</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-14 relative">
                    <div className="left-[563px] top-[20px] absolute inline-flex justify-start items-center gap-2">
                      <div className="w-4 h-4 bg-slate-50 rounded border border-slate-200" />
                      <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-none">불가능</div>
                    </div>
                    <div className="left-[637px] top-[20px] absolute inline-flex justify-start items-center gap-2">
                      <div className="w-4 h-4 bg-blue-50 rounded border border-blue-200" />
                      <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-none">가능</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch p-4 bg-slate-50 rounded-lg flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-slate-700 text-sm font-medium font-['Inter'] leading-none">선택된 업무 가능 시간</div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch justify-start text-slate-700 text-sm font-normal font-['Inter'] leading-none">월요일: 09:00-12:00</div>
                    <div className="self-stretch justify-start text-slate-700 text-sm font-normal font-['Inter'] leading-none">화요일: 09:00-12:00</div>
                    <div className="self-stretch justify-start text-slate-700 text-sm font-normal font-['Inter'] leading-none">금요일: 09:00-12:00, 14:00-18:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[720px] left-[40px] top-[40px] absolute inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch text-center justify-start text-slate-800 text-3xl font-bold font-['Inter'] leading-loose">매니저 회원가입</div>
            <div className="self-stretch text-center justify-start text-slate-500 text-base font-normal font-['Inter'] leading-tight">서비스 이용을 위한 정보를 입력해주세요</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};