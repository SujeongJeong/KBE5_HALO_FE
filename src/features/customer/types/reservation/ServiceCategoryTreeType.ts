export interface ServiceCategoryTreeType {
    serviceId: number;
    serviceName: string;
    serviceTime: number | null;
    depth: number;
    price: number;
    description: string;
    children: ServiceCategoryTreeType[];
  }
  