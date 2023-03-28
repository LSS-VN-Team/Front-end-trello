import axios from "axios";
import { Board } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";
const url = process.env.REACT_APP_BACKEND_URL;
const factories = {
  getPost: (data: Board) => {
    return axios({
      method: "get",
      url: `${url}posts?page=1&limit=20`,
      data: data,
    });
  },
  addPost: (data: Board) => {
    return axiosRequest({
      method: "post",
      url: `/posts/Create`,
      data: data,
    });
  },
};
export default factories;
