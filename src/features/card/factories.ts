import { Card } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";

const factories = {
  fetchCards: () => {
    return axiosRequest({
      method: "get",
      url: `card`,
    });
  },
  createCard: (data: Card) => {
    return axiosRequest({
      method: "post",
      url: `card`,
      data: data,
    });
  },
  updateCard: (data: Card) => {
    return axiosRequest({
      method: "put",
      url: `TaskCard/${data._id}`,
      data: data,
    });
  },
  deleteCard: (id: string) => {
    return axiosRequest({
      method: "delete",
      url: `TaskCard/${id}`,
    });
  },
};
export default factories;
