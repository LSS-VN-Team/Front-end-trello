

export interface UserResponse {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: "user"|"admin";
  status: "active"|"inactive";
  createdAt: Date;
  updatedAt: Date;
  token: string
}
export interface LoginState {
  info: UserResponse;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
}
