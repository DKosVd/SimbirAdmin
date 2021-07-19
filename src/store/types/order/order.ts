import { Car } from "../car/car";
import { City } from "../city/city";
import { Point } from "../point/point";
import { Rate } from "../rate/rate";
import { Status } from "../statusOrder/status";

export interface IOrder {
  orderStatusId?: Status;
  cityId?: City;
  pointId?: Point;
  carId?: Car;
  color: string;
  dateFrom: number;
  dateTo: number;
  rateId?: Rate;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
}

export interface IOrderProps {
  page?: number;
  offset?: number;
  limit?: number;
}
