import { Action } from "redux";
import { IOrder, IOrderProps } from "../../types/order/order";
import { IResponseOrder } from "../../types/response";

export enum OrderActionType {
  FETCH_ORDER = "order/FETCH_ORDER",
  SET_ORDER = "order/SET_ORDER",
}

export interface ISetOrder extends Action<OrderActionType> {
  type: OrderActionType.SET_ORDER;
  payload: IOrder[];
}

export interface IFetchOrder extends Action<OrderActionType> {
  type: OrderActionType.FETCH_ORDER;
  payload: IOrderProps;
}

export const SetOrderAction = (payload: IResponseOrder) => ({
  type: OrderActionType.SET_ORDER,
  payload,
});

export const FetchOrderAction = (payload: IOrderProps) => ({
  type: OrderActionType.FETCH_ORDER,
  payload,
});

export type OrderAction = ISetOrder | IFetchOrder;
