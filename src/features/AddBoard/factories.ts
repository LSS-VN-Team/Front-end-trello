import { Board } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";
const factories = {
  getBoard: (data: Board) => {
    return axiosRequest({
      method: "get",
      url: `board/get?page=1&limit=20`,
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
};
export default factories;
