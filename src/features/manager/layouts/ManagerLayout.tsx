import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import type { ReactNode } from "react";
import { ManagerSidebar } from "@/features/manager/components/ManagerSidebar";

interface ManagerLayoutProps {
  children?: ReactNode;
}

export const ManagerLayout = ({ children }: ManagerLayoutProps) => {
  return (
    <Fragment>
      <div className="w-full min-h-screen bg-slate-100 inline-flex justify-start items-start">
        <ManagerSidebar />
        {children || <Outlet />}
      </div>
    </Fragment>
  );
};