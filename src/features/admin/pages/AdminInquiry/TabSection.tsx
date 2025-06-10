import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/Tabs";

interface TabsSectionProps {
  value: "customer" | "manager";
  onValueChange: (value: "customer" | "manager") => void;
}

export const TabsSection = ({ value, onValueChange }: TabsSectionProps): any => {
  const location = useLocation();
  const navigate = useNavigate();
  const tabItems = [
    { id: "customer", label: "고객 상담", value: "customer" },
    { id: "manager", label: "매니저 상담", value: "manager" },
  ];

  const handleTabClick = (tabValue: string) => {
    navigate({ pathname: location.pathname, search: `?type=${tabValue}` }, { replace: true });
    onValueChange(tabValue as "customer" | "manager");
  };

  return (
    <Tabs value={value} onValueChange={handleTabClick} className="w-full">
      <TabsList className="flex h-10 w-full border-b bg-transparent p-0 justify-start">
        {tabItems.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.value}
            className="h-10 w-40 rounded-none border-0 px-4 py-0"
          >
            <span className="text-sm">{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default TabsSection;
