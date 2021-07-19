import { Car } from "./car/car";
import { IOrder } from "./order/order";

export interface IResponseLogin {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  user_id: string;
}

export interface IResponseAuth {
  username: string;
  type: string;
  id: string;
}

export interface IResponseOrder {
  data: IOrder[];
  count: number;
}

export interface IResponseCar {
  data: Car[];
  count: number;
}
