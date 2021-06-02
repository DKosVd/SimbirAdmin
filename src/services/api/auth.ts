import { instanceCheck, instanceLogin } from "../../core/axios";
import { ILoginData } from "../../store/reducers/auth/contracts/state";
import { IResponseAuth, IResponseLogin } from "../../store/types/response";

export const loginApi = {
  async login(info: ILoginData) {
    const { data } = await instanceLogin.post<IResponseLogin>(
      "/auth/login",
      info
    );
    return data;
  },
  async check() {
    const { data } = await instanceCheck.get<IResponseAuth>("/auth/check");
    return data;
  },
};
