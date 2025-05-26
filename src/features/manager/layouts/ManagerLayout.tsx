import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import ManagerSidebar from "@/features/manager/components/ManagerSidebar";

const ManagerLayout = () => {
  return (
    <Fragment>
      <div className="w-full min-h-screen bg-slate-100 inline-flex justify-start items-start">
        <ManagerSidebar />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default ManagerLayout;