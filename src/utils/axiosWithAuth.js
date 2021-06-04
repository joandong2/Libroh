import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    //baseURL: "http://localhost:8000/api",
    baseURL: "https://libroh.herokuapp.com/api",
    withCredentials: true,
    credentials: "include"
  });
};
