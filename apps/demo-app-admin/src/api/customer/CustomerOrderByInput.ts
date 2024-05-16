import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
