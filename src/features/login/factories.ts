import axios from "axios";
import { ILogin } from "interfaces";
export interface Login{
  email:string,
  password:string
}
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
