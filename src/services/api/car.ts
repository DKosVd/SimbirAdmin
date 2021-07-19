import { instanceCheck } from "../../core/axios";
import { ICarProps } from "../../store/types/car/car";
import { IResponseCar } from "../../store/types/response";

export const carApi = {
  async getCar({ categoryId, page, offset, limit }: ICarProps) {
    const { data } = await instanceCheck.get<IResponseCar>(`/db/car`, {
      params: {
        categoryId,
        page,
        offset,
        limit,
      },
    });
    return { data: data.data, count: data.count };
  },
};
