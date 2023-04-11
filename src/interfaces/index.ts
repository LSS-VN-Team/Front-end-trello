import { NavigateFunction } from 'react-router-dom';

export interface ILogin {
  email: string;
  password: string;
  Navigate: NavigateFunction;
}
export interface Board {
  _id?:string;
  name: string;
  admin:string
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

export interface Card {
  _id?: string;
  name: string;
  BoardId?: string;
}
export interface UserResponseData {
  email: string;
  name: string;
}
export interface Task {
  _id?: string;
  title: string;
}
export interface LastView{
  idUser?:string;
  idBoard?:string;
}
export interface BoardLastView{
  name: string;
  url:string;
}