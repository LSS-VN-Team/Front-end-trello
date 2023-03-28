import axios from "axios";
import { Login } from "./interface";

const url = process.env.REACT_APP_BACKEND_URL;
const factories = {
  requestLogin: (data: Login) => {
    return axios({
      method: "post",
      url: `${url}auth/login`,
      data: data,
    });
  },
};
export default factories;
