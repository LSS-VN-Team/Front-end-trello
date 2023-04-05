import { TaskCard } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";

const factories = {
  fetchTasks: () => {
    return axiosRequest({
      method: "get",
      url: `TaskCard`,
    });
  },
  createTask: (data: TaskCard) => {
    return axiosRequest({
      method: "post",
      url: `TaskCard`,
      data: data,
    });
  },
  updateTask: (data: TaskCard) => {
    return axiosRequest({
      method: "put",
      url: `TaskCard/${data._id}`,
      data: data,
    });
  },
  deleteTask: (id: string) => {
    return axiosRequest({
      method: "delete",
      url: `TaskCard/${id}`,
    });
  },
};
export default factories;
