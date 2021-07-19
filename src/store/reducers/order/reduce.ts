import { OrderActionType, OrderAction } from "../../actions/order/order";

import { OrderState } from "./contracts/state";

const initialState: OrderState = {
  order: null,
};

export const orderReducer = (state = initialState, action: OrderAction) => {
  switch (action.type) {
    case OrderActionType.SET_ORDER:
      return {
        order: action.payload,
      };
    default:
      return state;
  }
};
