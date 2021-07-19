import { IOrder } from "../../../types/order/order";
import { IResponseOrder } from "../../../types/response";

export interface OrderState {
  order: IResponseOrder | null;
}
