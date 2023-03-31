import axios from "axios";
import { TaskCard } from "interfaces";

const url = process.env.REACT_APP_BACKEND_URL;
const factories = {
  fetchTasks: () => {
    return axios({
      method: "get",
      url: `${url}TaskCard`,
    });
  },
  createTask: (data: TaskCard) => {
    return axios({
      method: "post",
      url: `${url}TaskCard`,
      data: data,
    });
  },
  updateTask: (data: TaskCard) => {
    return axios({
      method: "put",
      url: `${url}TaskCard/${data._id}`,
      data: data,
    });
  },
  deleteTask: (id: string) => {
    return axios({
      method: "delete",
      url: `${url}TaskCard/${id}`,
    });
  },
};
export default factories;
