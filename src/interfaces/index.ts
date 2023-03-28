import { NavigateFunction } from 'react-router-dom';

export interface ILogin {
  email: string;
  password: string;
  Navigate: NavigateFunction;
}
export interface IRegister {
  email: string;
  password: string;
  name: string;
}