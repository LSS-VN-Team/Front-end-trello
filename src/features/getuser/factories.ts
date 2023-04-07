import { UserResponseData } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";
const factories = {
  getUserID: (data:UserResponseData) => {
    const id = localStorage.getItem("_id");
    return axiosRequest({
      method: "get",
      url: `user/${id}`,
      data: data,
    });
  }
};
export default factories;
