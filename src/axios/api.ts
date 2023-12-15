import axios from "axios";

export const jsonApi = axios.create({
  baseURL: "http://localhost:5000",
});
