export interface UserResponse {
  firstName: string;
  lastName: string;
  avatar: string;
  role: "user"|"admin";
  status: "active"|"inactive";
  createdAt: Date;
  updatedAt: Date;
  token: string
  "isExistsEmail":{
    _id: string
  }
}
export interface LoginState {
  info: UserResponse;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
}

export interface Login{
  email:string,
  password:string
}

