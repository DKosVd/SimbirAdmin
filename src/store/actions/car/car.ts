import { Action } from "redux";
import { Car, ICarProps } from "../../types/car/car";
import { IResponseCar } from "../../types/response";

export enum CarActionType {
  FETCH_CAR = "car/FETCH_CAR",
  SET_CAR = "car/SET_CAR",
}

export interface ISetCar extends Action<CarActionType> {
  type: CarActionType.SET_CAR;
  payload: Car[];
}

export interface IFetchCar extends Action<CarActionType> {
  type: CarActionType.FETCH_CAR;
  payload: ICarProps;
}

export const SetCarAction = (payload: IResponseCar) => ({
  type: CarActionType.SET_CAR,
  payload,
});

export const FetchCarAction = (payload: ICarProps) => ({
  type: CarActionType.FETCH_CAR,
  payload,
});

export type CarAction = ISetCar | IFetchCar;
