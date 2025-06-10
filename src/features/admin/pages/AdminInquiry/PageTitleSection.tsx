import { useState } from "react";

import { Button } from "@/shared/components/ui/Button";


export const PageTitleSection = (): JSX.Element => {
  return (
    <header className="flex h-16 items-center justify-between px-6 py-0 w-full bg-white border-b border-gray-200">
      <h1 className="font-bold text-gray-900 text-xl leading-6 whitespace-nowrap">
        문의 내역 관리
      </h1>
    </header>
  );
};

export default PageTitleSection;
