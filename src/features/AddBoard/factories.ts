import { Board } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";
const factories = {
  getBoard: (data: Board) => {
    const id = localStorage.getItem("_id");
    // debugger
    return axiosRequest({
      method: "get",
      url: `board/get?admin=${id}&page=1&limit=20`,
      data: data,
    });
  },
  addBoard: (data: Board) => {
    return axiosRequest({
      method: "post",
      url: `/board`,
      data: data,
    });
  },
   editBoard: (data: Board) => {
    return axiosRequest({
      method: "put",
      url: `/board/getbyid/${data._id}`,
      data: data,
    });
  },
  removeBoard: (id: string) => {
    return axiosRequest({
      method: "delete",
      url: `/board/${id}`,
    });
  },
  getboardID: (id: string) => {
    return axiosRequest({
      method: "get",
      url: `/board/getbyid/${id}`,
    });
  }
};
export default factories;
