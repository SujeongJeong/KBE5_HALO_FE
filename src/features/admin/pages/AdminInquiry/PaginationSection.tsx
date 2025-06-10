import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/shared/components/ui/Pagination";



interface PaginationSectionProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

export const PaginationSection = ({ page, pageSize, total, onPageChange }: PaginationSectionProps): JSX.Element => {
  const totalPages = Math.max(Math.ceil(total / pageSize), 1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination className="py-4 w-full">
      <PaginationContent className="flex items-center justify-center gap-1">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="w-9 h-9 p-0 flex items-center justify-center bg-white rounded-md border border-solid"
            aria-label="Go to previous page"
            onClick={e => { e.preventDefault(); if (page > 1) onPageChange(page - 1); }}
          >
            {'<'}
          </PaginationPrevious>
        </PaginationItem>

        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href="#"
              className={`w-9 h-9 p-0 flex items-center justify-center rounded-md ${
                p === page
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-500 border border-solid"
              }`}
              aria-label={`Page ${p}`}
              aria-current={p === page ? "page" : undefined}
              onClick={e => { e.preventDefault(); if (p !== page) onPageChange(p); }}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            className="w-9 h-9 p-0 flex items-center justify-center bg-white rounded-md border border-solid"
            aria-label="Go to next page"
            onClick={e => { e.preventDefault(); if (page < totalPages) onPageChange(page + 1); }}
          >
            {'>'}
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
  