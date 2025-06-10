import { useState } from "react";

import { Badge } from "@/shared/components/ui/Badge";
import { Button } from "@/shared/components/ui/Button";
import { Card } from "@/shared/components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/Table";

interface Inquiry {
  id: string | number;
  title: string;
  customerName: string;
  status: string;
  registrationDate: string;
}

interface InquiryListSectionProps {
  inquiries: Inquiry[];
  loading: boolean;
  onDelete: (id: string | number) => void;
}

const InquiryListSection = ({ inquiries, loading, onDelete }: InquiryListSectionProps): any => {
  return (
    <Card className="w-full bg-white rounded-lg shadow-[0px_2px_8px_#0000000a]">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow className="border-b">
            <TableHead className="w-20 h-12 font-semibold text-sm text-gray-700">
              ID
            </TableHead>
            <TableHead className="w-[280px] h-12 font-semibold text-sm text-gray-700">
              제목
            </TableHead>
            <TableHead className="w-40 h-12 font-semibold text-sm text-gray-700">
              고객명
            </TableHead>
            <TableHead className="w-[120px] h-12 font-semibold text-sm text-gray-700">
              상태
            </TableHead>
            <TableHead className="w-40 h-12 font-semibold text-sm text-gray-700">
              등록일
            </TableHead>
            <TableHead className="h-12 font-semibold text-sm text-gray-700 text-right">
              관리
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8">로딩 중...</TableCell>
            </TableRow>
          ) : inquiries.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8">조회된 문의가 없습니다.</TableCell>
            </TableRow>
          ) : (
            inquiries.map((inquiry) => (
              <TableRow key={inquiry.id} className="h-16 border-b">
                <TableCell className="font-normal text-sm text-gray-500">
                  {inquiry.id}
                </TableCell>
                <TableCell className="font-medium text-sm text-gray-900">
                  {inquiry.title}
                </TableCell>
                <TableCell className="font-medium text-sm text-gray-900">
                  {inquiry.customerName}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      inquiry.status === "대기중"
                        ? "bg-amber-100 text-amber-600 border-0 rounded-xl px-2 py-0.5 text-xs font-medium"
                        : inquiry.status === "답변완료"
                        ? "bg-emerald-50 text-emerald-500 border-0 rounded-xl px-2 py-0.5 text-xs font-medium"
                        : "bg-gray-100 text-gray-500 border-0 rounded-xl px-2 py-0.5 text-xs font-medium"
                    }
                  >
                    {inquiry.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-normal text-sm text-gray-500">
                  {inquiry.registrationDate}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      className="h-auto px-2 py-1 text-sm font-medium text-red-500 border-red-500"
                      onClick={() => onDelete(inquiry.id)}
                    >
                      삭제
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default InquiryListSection;

