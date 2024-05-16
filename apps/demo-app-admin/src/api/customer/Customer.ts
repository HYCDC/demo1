import { Order } from "../order/Order";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  isActive: boolean | null;
  name: string | null;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
