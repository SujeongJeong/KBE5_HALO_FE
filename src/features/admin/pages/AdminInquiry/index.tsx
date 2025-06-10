import { useState, useEffect, useCallback, Fragment } from "react";

import InquiryListSection from "@/features/admin/pages/AdminInquiry/InquiryListSection";
import PageTitleSection from "@/features/admin/pages/AdminInquiry/PageTitleSection";
import PaginationSection from "@/features/admin/pages/AdminInquiry/PaginationSection";
import SearchSection from "@/features/admin/pages/AdminInquiry/SearchSection";
import TabsSection from "@/features/admin/pages/AdminInquiry/TabSection";
import {
  searchAdminInquiries,
  getAdminInquiry,
  deleteAdminInquiry,
  answerAdminInquiry,
  updateAdminInquiryAnswer
} from "@/features/admin/api/adminInquiry";

const PAGE_SIZE = 10;

export default function Content(): JSX.Element {
  // 문의 유형: customer | manager
  const [inquiryType, setInquiryType] = useState<"customer" | "manager">("customer");
  // 검색 조건
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  // 페이징
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  // 목록 데이터
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 탭 변경 핸들러
  const handleTabChange = (type: "customer" | "manager") => {
    setInquiryType(type);
    setName("");
    setTitle("");
    setPage(1);
  };

  // 검색 핸들러
  const handleSearch = () => {
    setPage(1);
    fetchInquiries(1, name, title, inquiryType);
  };

  // 초기화 핸들러
  const handleReset = () => {
    setName("");
    setTitle("");
    setPage(1);
    fetchInquiries(1, "", "", inquiryType);
  };

  // 목록 조회
  const fetchInquiries = useCallback(
    async (pageNum = page, nameVal = name, titleVal = title, typeVal = inquiryType) => {
      setLoading(true);
      try {
        const data = await searchAdminInquiries(typeVal, {
          name: nameVal,
          title: titleVal,
          page: pageNum - 1,
          size: PAGE_SIZE,
        });
        setInquiries(data?.content || []);
        setTotal(data?.page?.totalElements || 0);

        console.log(data);
      } catch (e) {
        setInquiries([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    }, [page, name, title, inquiryType]
  );

  // 페이지 변경 핸들러
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // 삭제 핸들러
  const handleDelete = async (id: string | number) => {
    if (!window.confirm("정말로 삭제하시겠습니까?")) return;
    try {
      await deleteAdminInquiry(inquiryType, Number(id));
      fetchInquiries(page, name, title, inquiryType);
    } catch (e) {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  // 탭/검색/페이지 변경 시 목록 조회
  useEffect(() => {
    fetchInquiries(page, name, title, inquiryType);
    // eslint-disable-next-line
  }, [inquiryType, page]);

  return (
    <main className="flex flex-col w-full">
      <PageTitleSection />
      <div className="gap-6 p-6 flex flex-col w-full">
        <TabsSection value={inquiryType} onValueChange={handleTabChange} />
        <SearchSection
          name={name}
          title={title}
          onNameChange={setName}
          onTitleChange={setTitle}
          onSearch={handleSearch}
          onReset={handleReset}
        />
        <InquiryListSection
          inquiries={inquiries.map((item) => ({
            id: item.inquiryId,
            title: item.title,
            customerName: item.authorId,
            status: item.status,
            registrationDate: new Date(item.createdAt).toLocaleDateString(),
          }))}
          loading={loading}
          onDelete={handleDelete}
        />
        <PaginationSection
          page={page}
          pageSize={PAGE_SIZE}
          total={total}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
}
