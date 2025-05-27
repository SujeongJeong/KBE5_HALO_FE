import { Fragment } from "react";

export const CustomerMain = () => {
  return (
    <Fragment>    
      <div className="self-stretch h-[600px] p-28 bg-gradient-to-l from-indigo-600 to-violet-600 flex flex-col justify-center items-start">
        <div className="w-[600px] flex flex-col justify-start items-start gap-6">
          <div className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[57.60px]">전문 매니저와 깔끔한 생활, 지금 시작하세요!</div>
          <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">HaloCare와 함께라면 청소와 가사 걱정은 끝! 전문 매니저가 당신의 일상을 더 편안하게 만들어 드립니다.</div>
          <div className="w-48 h-14 bg-white rounded-lg flex flex-col justify-center items-center">
            <div className="justify-start text-indigo-600 text-base font-semibold font-['Inter'] leading-tight">지금 예약하기</div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-28 px-28 bg-gray-50 inline-flex justify-center items-center">
        <div className="w-[1200px] h-20 px-6 py-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-600/80 flex justify-between items-center">
          <div className="inline-flex flex-col justify-center items-start gap-1">
            <div className="justify-start text-zinc-800 text-lg font-bold font-['Inter'] leading-snug">첫 예약 30% 할인 이벤트</div>
            <div className="justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-none">신규 회원 대상, 6월 30일까지</div>
          </div>
          <div className="w-28 h-10 bg-indigo-600 rounded-lg inline-flex flex-col justify-center items-center">
            <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-none">자세히 보기</div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-28 py-20 flex flex-col justify-start items-start gap-12">
        <div className="self-stretch flex flex-col justify-center items-center gap-4">
          <div className="justify-start text-zinc-800 text-3xl font-bold font-['Inter'] leading-10">서비스 카테고리</div>
          <div className="justify-start text-stone-500 text-lg font-normal font-['Inter'] leading-snug">다양한 청소 서비스 중 필요한 서비스를 선택하세요</div>
        </div>
        <div className="self-stretch inline-flex justify-center items-start gap-6">
          <div className="w-96 h-96 p-8 bg-white rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-[0px_10px_28px_4px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-start items-center gap-6">
            <div className="w-20 h-20 relative overflow-hidden">
              <div className="w-20 h-20 left-0 top-0 absolute bg-violet-50" />
              <div className="w-7 h-7 left-[30px] top-[30px] absolute bg-indigo-600" />
            </div>
            <div className="self-stretch text-center justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-7">가사 서비스</div>
            <div className="self-stretch text-center justify-start text-stone-500 text-base font-normal font-['Inter'] leading-normal">일상적인 집안일부터 대청소까지, 전문 매니저가 도와드립니다.</div>
            <div className="w-40 h-12 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-indigo-600 flex flex-col justify-center items-center">
              <div className="justify-start text-indigo-600 text-base font-semibold font-['Inter'] leading-tight">자세히 보기</div>
            </div>
          </div>
          <div className="w-96 h-96 p-8 bg-white rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] shadow-[0px_10px_28px_20px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-start items-center gap-6">
            <div className="w-20 h-20 relative overflow-hidden">
              <div className="w-20 h-20 left-0 top-0 absolute bg-violet-50" />
              <div className="w-10 h-7 left-[20px] top-[25px] absolute bg-indigo-600" />
              <div className="w-7 h-[5px] left-[25px] top-[30px] absolute bg-white" />
              <div className="w-7 h-[5px] left-[25px] top-[40px] absolute bg-white" />
            </div>
            <div className="self-stretch text-center justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-7">에어컨 청소</div>
            <div className="self-stretch text-center justify-start text-stone-500 text-base font-normal font-['Inter'] leading-normal">에어컨 내부 세척부터 필터 교체까지, 쾌적한 공기를 위한 서비스입니다.</div>
            <div className="w-40 h-12 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-indigo-600 flex flex-col justify-center items-center">
              <div className="justify-start text-indigo-600 text-base font-semibold font-['Inter'] leading-tight">자세히 보기</div>
            </div>
          </div>
          <div className="w-96 h-96 p-8 bg-white rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] shadow-[0px_10px_28px_20px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-start items-center gap-6">
            <div className="w-20 h-20 relative overflow-hidden">
              <div className="w-20 h-20 left-0 top-0 absolute bg-violet-50" />
              <div className="w-7 h-9 left-[25px] top-[20px] absolute bg-indigo-600" />
            </div>
            <div className="self-stretch text-center justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-7">돌봄 서비스</div>
            <div className="self-stretch text-center justify-start text-stone-500 text-base font-normal font-['Inter'] leading-normal">아이돌봄, 노인돌봄 등 맞춤형 돌봄 서비스를 제공합니다.</div>
            <div className="w-40 h-12 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-indigo-600 flex flex-col justify-center items-center">
              <div className="justify-start text-indigo-600 text-base font-semibold font-['Inter'] leading-tight">자세히 보기</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-28 py-20 bg-gray-50 flex flex-col justify-start items-start gap-12">
        <div className="self-stretch flex flex-col justify-center items-center gap-4">
          <div className="justify-start text-zinc-800 text-3xl font-bold font-['Inter'] leading-10">간편한 HaloCare 이용 방법</div>
          <div className="justify-start text-stone-500 text-lg font-normal font-['Inter'] leading-snug">간편한 3단계로 청소 서비스를 이용해보세요</div>
        </div>
        <div className="self-stretch inline-flex justify-center items-start gap-10">
          <div className="w-80 inline-flex flex-col justify-start items-center gap-6">
            <div className="w-20 h-20 bg-indigo-600 rounded-[40px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center">
              <div className="justify-start text-white text-3xl font-bold font-['Inter'] leading-10">1</div>
            </div>
            <div className="self-stretch text-center justify-start text-zinc-800 text-xl font-bold font-['Inter'] leading-normal">서비스 선택</div>
            <div className="self-stretch text-center justify-start text-stone-500 text-base font-normal font-['Inter'] leading-normal">필요한 서비스와 날짜, 시간을 선택하세요.</div>
          </div>
          <div className="w-80 inline-flex flex-col justify-start items-center gap-6">
            <div className="w-20 h-20 bg-indigo-600 rounded-[40px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center">
              <div className="justify-start text-white text-3xl font-bold font-['Inter'] leading-10">2</div>
            </div>
            <div className="self-stretch text-center justify-start text-zinc-800 text-xl font-bold font-['Inter'] leading-normal">매니저 매칭</div>
            <div className="self-stretch text-center justify-start text-stone-500 text-base font-normal font-['Inter'] leading-normal">검증된 전문 매니저가 배정됩니다.</div>
          </div>
          <div className="w-80 inline-flex flex-col justify-start items-center gap-6">
            <div className="w-20 h-20 bg-indigo-600 rounded-[40px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center">
              <div className="justify-start text-white text-3xl font-bold font-['Inter'] leading-10">3</div>
            </div>
            <div className="self-stretch text-center justify-start text-zinc-800 text-xl font-bold font-['Inter'] leading-normal">서비스 완료</div>
            <div className="self-stretch text-center justify-start text-stone-500 text-base font-normal font-['Inter'] leading-normal">깔끔하게 정리된 공간을 확인하세요.</div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-28 py-20 flex flex-col justify-start items-start gap-12">
        <div className="self-stretch flex flex-col justify-center items-center gap-4">
          <div className="justify-start text-zinc-800 text-3xl font-bold font-['Inter'] leading-10">고객 후기</div>
          <div className="justify-start text-stone-500 text-lg font-normal font-['Inter'] leading-snug">HaloCare 서비스를 이용한 고객님들의 생생한 후기</div>
        </div>
        <div className="self-stretch inline-flex justify-center items-start gap-6">
          <div className="w-72 h-80 p-6 bg-white rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-[0px_10px_15px_-4px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-1">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
            </div>
            <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-normal">"매니저님이 꼼꼼하게 청소해주셔서 집이 새집처럼 깨끗해졌어요. 다음에도 꼭 이용할 예정입니다!"</div>
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="w-10 h-10 bg-violet-50 rounded-[20px] inline-flex flex-col justify-center items-center">
                <div className="justify-start text-indigo-600 text-base font-semibold font-['Inter'] leading-tight">K</div>
              </div>
              <div className="inline-flex flex-col justify-center items-start">
                <div className="justify-start text-zinc-800 text-base font-semibold font-['Inter'] leading-tight">김지영</div>
                <div className="justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-none">가사 서비스 이용</div>
              </div>
            </div>
          </div>
          <div className="w-72 h-80 p-6 bg-white rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] shadow-[0px_10px_15px_-4px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-1">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
            </div>
            <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-normal">"에어컨 청소를 맡겼는데 냄새도 없어지고 시원함이 달라졌어요. 전문가의 손길이 느껴졌습니다."</div>
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="w-10 h-10 bg-violet-50 rounded-[20px] inline-flex flex-col justify-center items-center">
                <div className="justify-start text-indigo-600 text-base font-semibold font-['Inter'] leading-tight">P</div>
              </div>
              <div className="inline-flex flex-col justify-center items-start">
                <div className="justify-start text-zinc-800 text-base font-semibold font-['Inter'] leading-tight">박현우</div>
                <div className="justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-none">에어컨 청소 이용</div>
              </div>
            </div>
          </div>
          <div className="w-72 h-80 p-6 bg-white rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] shadow-[0px_10px_15px_-4px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-1">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
            </div>
            <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-normal">"아이 돌봄 서비스를 이용했는데, 매니저님이 아이와 잘 놀아주시고 안전하게 돌봐주셔서 안심이 됐어요."</div>
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="w-10 h-10 bg-violet-50 rounded-[20px] inline-flex flex-col justify-center items-center">
                <div className="justify-start text-indigo-600 text-base font-semibold font-['Inter'] leading-tight">L</div>
              </div>
              <div className="inline-flex flex-col justify-center items-start">
                <div className="justify-start text-zinc-800 text-base font-semibold font-['Inter'] leading-tight">이수진</div>
                <div className="justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-none">돌봄 서비스 이용</div>
              </div>
            </div>
          </div>
          <div className="w-72 h-80 p-6 bg-white rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-[0px_10px_15.399999618530273px_-4px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-1">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-4 h-3.5 left-[2px] top-[1px] absolute bg-yellow-400" />
              </div>
            </div>
            <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-normal">"정기적으로 이용하고 있어요. 매번 깔끔하게 청소해주시고 친절하셔서 만족스럽습니다."</div>
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="w-10 h-10 bg-violet-50 rounded-[20px] inline-flex flex-col justify-center items-center">
                <div className="justify-start text-indigo-600 text-base font-semibold font-['Inter'] leading-tight">C</div>
              </div>
              <div className="inline-flex flex-col justify-center items-start">
                <div className="justify-start text-zinc-800 text-base font-semibold font-['Inter'] leading-tight">최민준</div>
                <div className="justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-none">가사 서비스 이용</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-28 py-20 bg-gray-50 flex flex-col justify-start items-start gap-12">
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="w-[600px] inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-7">공지사항</div>
              <div className="justify-start text-indigo-600 text-base font-medium font-['Inter'] leading-tight">전체 보기</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch p-4 border-b border-zinc-100 inline-flex justify-between items-center">
                <div className="justify-start text-zinc-800 text-base font-medium font-['Inter'] leading-tight">HaloCare 서비스 지역 확장 안내</div>
                <div className="justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-none">2023.06.15</div>
              </div>
              <div className="self-stretch p-4 border-b border-zinc-100 inline-flex justify-between items-center">
                <div className="justify-start text-zinc-800 text-base font-medium font-['Inter'] leading-tight">여름맞이 에어컨 청소 예약 오픈</div>
                <div className="justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-none">2023.06.10</div>
              </div>
              <div className="self-stretch p-4 border-b border-zinc-100 inline-flex justify-between items-center">
                <div className="justify-start text-zinc-800 text-base font-medium font-['Inter'] leading-tight">앱 업데이트 안내 (v2.0)</div>
                <div className="justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-none">2023.06.05</div>
              </div>
            </div>
          </div>
          <div className="w-[500px] inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-7">이벤트</div>
              <div className="justify-start text-indigo-600 text-base font-medium font-['Inter'] leading-tight">전체 보기</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch h-28 p-4 bg-white rounded-xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex justify-start items-center gap-4">
                <div className="w-20 h-20 bg-indigo-600 rounded-lg inline-flex flex-col justify-center items-center">
                  <div className="justify-start text-white text-base font-bold font-['Inter'] leading-tight">EVENT</div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-center items-start gap-2">
                  <div className="self-stretch justify-start text-zinc-800 text-lg font-semibold font-['Inter'] leading-snug">친구 추천 이벤트</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-none">친구 추천하고 10,000원 적립금 받으세요!</div>
                  <div className="self-stretch justify-start text-indigo-600 text-sm font-normal font-['Inter'] leading-none">2023.06.01 ~ 2023.06.30</div>
                </div>
              </div>
              <div className="self-stretch h-28 p-4 bg-white rounded-xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex justify-start items-center gap-4">
                <div className="w-20 h-20 bg-indigo-600 rounded-lg inline-flex flex-col justify-center items-center">
                  <div className="justify-start text-white text-base font-bold font-['Inter'] leading-tight">SALE</div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-center items-start gap-2">
                  <div className="self-stretch justify-start text-zinc-800 text-lg font-semibold font-['Inter'] leading-snug">여름 특별 할인</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-none">에어컨 청소 20% 할인 프로모션</div>
                  <div className="self-stretch justify-start text-indigo-600 text-sm font-normal font-['Inter'] leading-none">2023.06.15 ~ 2023.07.15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};