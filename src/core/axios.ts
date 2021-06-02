import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";
import { localStorage } from "../services/localStorage/localStorage";

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
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

const instanceLogin: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_APLICATION_URL,
  headers: {
    "X-Api-Factory-Application-Id": process.env.REACT_APP_APLICATION_ID,
    Authorization: `Basic ${basic}`,
  },
});

export { instanceLogin, instanceCheck };
