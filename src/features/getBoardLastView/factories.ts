import { UserResponseData } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";
const factories = {
  getLastViewBoard: (data:UserResponseData) => {
    const id = localStorage.getItem("_id");
    return axiosRequest({
      method: "get",
      url: `board/getrecentlyViewed/${id}`,
      data: data,
    });
  }
};
export default factories;
