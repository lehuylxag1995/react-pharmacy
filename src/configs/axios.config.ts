import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://192.168.1.165:3000/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
