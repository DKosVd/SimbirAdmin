import axios, { AxiosInstance, AxiosResponse } from "axios";
import dotenv from "dotenv";
import CookiesUtils from "../services/cookies/cookies";
import { localStorage } from "../services/localStorage/localStorage";
import { IResponseLogin } from "../store/types/response";

dotenv.config();
const basic = Buffer.from(
  `${Math.random().toString(16).slice(2, 8)}:${
    process.env.REACT_APP_APLICATION_SECRET_KEY
  }`
).toString("base64");

const instanceCheck: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_APLICATION_URL,
  headers: {
    "X-Api-Factory-Application-Id": process.env.REACT_APP_APLICATION_ID,
    "Access-Control-Allow-Credentials": "true",
    Authorization: `Bearer ${CookiesUtils.getAccessToken()}`,
  },
});

instanceCheck.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response: IResponseLogin = await instanceLogin.post(
          "/auth/refresh",
          {
            refresh_token: CookiesUtils.getRefreshToken(),
          }
        );
        CookiesUtils.setAccessNRefresh(
          response.access_token,
          response.refresh_token,
          response.expires_in
        );
        return instanceLogin.request(originalRequest);
      } catch (err) {
        console.log("No authorization");
      }
    }
    throw error;
  }
);

const instanceLogin: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_APLICATION_URL,
  headers: {
    "X-Api-Factory-Application-Id": process.env.REACT_APP_APLICATION_ID,
    "Access-Control-Allow-Credentials": "true",
    Authorization: `Basic ${basic}`,
  },
});

export { instanceLogin, instanceCheck };
