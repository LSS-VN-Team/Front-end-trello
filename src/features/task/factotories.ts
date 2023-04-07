import {  Task } from "interfaces";
import { axiosRequest } from "utils/axiosRequest";

const factories = {
  fetchTasks: () => {
    return axiosRequest({
      method: "get",
      url: `Task`,
      
    });
  },
  createTask: (data: Task) => {
    return axiosRequest({
      method: "post",
      url: `Task`,
      data: data,
    });
  },
  updateTask: (data: Task) => {
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
