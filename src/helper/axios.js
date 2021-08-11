import axios from "axios";
import { API } from "../urlConfig";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: API,
  headers: { Authorization: token ? `bearer ${token}` : "" },
});

export default axiosInstance;
