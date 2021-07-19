import { CarActionType, CarAction } from "../../actions/car/car";
import { CarState } from "./contracts/state";

const initialState: CarState = {
  car: null,
};

export const carReducer = (state = initialState, action: CarAction) => {
  switch (action.type) {
    case CarActionType.SET_CAR:
      return {
        car: action.payload,
      };
    default:
      return state;
  }
};
