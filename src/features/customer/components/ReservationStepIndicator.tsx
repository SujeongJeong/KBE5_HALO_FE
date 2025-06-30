import React from 'react';

interface Props {
  step: number;
}

const steps = [
  { label: '서비스 정보 입력' },
  { label: '매니저 선택' },
  { label: '결제 및 완료' },
];

export const ReservationStepIndicator: React.FC<Props> = ({ step }) => {
  return (
    <div className="self-stretch px-16 py-6 bg-white inline-flex flex-col justify-start items-center gap-8">
      <div className="self-stretch text-center text-gray-900 text-3xl font-bold leading-loose">서비스 예약</div>
      <div className="w-[800px] inline-flex justify-center items-center">
        {steps.map((s, index) => {
          const isActive = index + 1 === step;
          const isDone = index + 1 < step;

          // Tailwind CSS classes for colors
          let circleBgClass = 'bg-gray-200'; // Default for future steps
          let circleTextClass = 'text-gray-500'; // Default text color for future steps
          let labelTextColorClass = 'text-gray-400'; // Default label color for future steps

          if (isActive) {
            circleBgClass = 'bg-indigo-600'; // Main color for active step
            circleTextClass = 'text-white'; // White number for active step
            labelTextColorClass = 'text-indigo-600'; // Main color for active label
          } else if (isDone) {
            circleBgClass = 'bg-indigo-400'; // Lighter indigo for completed steps
            circleTextClass = 'text-white'; // White number for completed step
            labelTextColorClass = 'text-indigo-400'; // Lighter indigo for completed label
          }

          return (
            <React.Fragment key={index}>
              {index > 0 && <div className="w-20 h-px bg-gray-200" />}
              <div className="w-48 inline-flex flex-col justify-start items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex justify-center items-center ${circleBgClass}`}
                >
                  <div className={`text-base font-semibold ${circleTextClass}`}>{index + 1}</div>
                </div>
                <div className={`text-sm font-medium ${labelTextColorClass}`}>
                  {s.label}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};