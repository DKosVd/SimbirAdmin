import { instanceCheck, instanceLogin } from "../../core/axios";
import { IOrderProps } from "../../store/types/order/order";
import { IResponseOrder } from "../../store/types/response";

export const orderApi = {
  async getOrder({ page, offset, limit }: IOrderProps) {
    const { data } = await instanceCheck.get<IResponseOrder>(
      `/db/order?page=${page}&offset=${offset}&limit=${limit}`
    );
    console.log(data);
    return { data: data.data, count: data.count };
  },
};
