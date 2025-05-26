import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import CustomerHeader from "../components/CustomerHeader";
import CustomerFooter from "../components/CustomerFooter";


const CustomerLayout = () => {
  return (
    <Fragment>
      <div className="w-full min-h-screen bg-white inline-flex flex-col justify-start items-start">
        <CustomerHeader />
        <Outlet />
        <CustomerFooter />
      </div>
    </Fragment>
  );
};

export default CustomerLayout;