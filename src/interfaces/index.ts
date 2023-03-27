import { Navigate } from 'react-router-dom';
export interface ILogin {
  email: string;
  password: string;
  Navigate: any;
}
export interface IRegister {
  email: string;
  password: string;
  name: string;
}