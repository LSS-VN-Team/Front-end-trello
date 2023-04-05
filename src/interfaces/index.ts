import { NavigateFunction } from 'react-router-dom';

export interface ILogin {
  email: string;
  password: string;
  Navigate: NavigateFunction;
}
export interface Board {
  _id?:string;
  name: string;
  
}

export interface ResponseData {
  totalPage: number;
  currentPage: number;
  data: Board[];
}
export interface IRegister {
  email: string;
  password: string;
  name: string;
}

export interface TaskCard {
  _id?: string;
  name: string;
  BoardId?: string;
}
