import axios from "axios";
import { IRegister } from "interfaces";

const url = process.env.REACT_APP_BACKEND_URL;

const factories = {
  requestRegister: (data: IRegister) => {
    return axios({
      method: "post",
      url: `${url}auth/register`,
      data: data,
    });
  },
};

export default factories;