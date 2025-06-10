import { useState } from "react";

import { Button } from "@/shared/components/ui/Button";
import { Card } from "@/shared/components/ui/Card";
import { CardContent } from "@/shared/components/ui/CardContent";
import { Input } from "@/shared/components/ui/Input";
import { Label } from "@/shared/components/ui/Label";

interface SearchSectionProps {
  name: string;
  title: string;
  onNameChange: (value: string) => void;
  onTitleChange: (value: string) => void;
  onSearch: () => void;
  onReset: () => void;
}

export default function SearchSection({ name, title, onNameChange, onTitleChange, onSearch, onReset }: SearchSectionProps): any {
  return (
    <Card className="w-full p-6 bg-white rounded-xl shadow-[0px_2px_12px_#0000000a]">
      <h2 className="font-semibold text-slate-800 text-lg leading-[21.6px] mb-4">
        검색 조건
      </h2>
      <CardContent className="p-0 space-y-4">
        <div className="flex flex-row gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <Label htmlFor="name" className="font-medium text-slate-700 text-sm leading-[16.8px]">
              이름
            </Label>
            <Input
              id="name"
              placeholder="이름 입력"
              className="h-12 bg-slate-50 border-slate-200 text-slate-400 text-sm"
              value={name}
              onChange={(e: any) => onNameChange(e.target.value)}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <Label htmlFor="title" className="font-medium text-slate-700 text-sm leading-[16.8px]">
              제목
            </Label>
            <Input
              id="title"
              placeholder="제목 입력"
              className="h-12 bg-slate-50 border-slate-200 text-slate-400 text-sm"
              value={title}
              onChange={(e: any) => onTitleChange(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            className="w-[120px] h-12 bg-slate-100 text-slate-500 font-medium text-sm"
            type="button"
            onClick={onReset}
          >
            초기화
          </Button>
          <Button
            className="w-[120px] h-12 bg-indigo-600 text-white font-medium text-sm"
            type="button"
            onClick={onSearch}
          >
            검색
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
