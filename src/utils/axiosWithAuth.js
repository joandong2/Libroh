import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    //baseURL: "http://localhost:8000/api",
    baseURL: "https://libroh.herokuapp.com",
    withCredentials: true,
    headers: {
      Authorization: token,
    },
  });
};
