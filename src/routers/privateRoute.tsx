import { ROUTES } from "constants/routers";
import { Navigate, Outlet } from "react-router-dom";

export interface PrivateRouteProps {}

export default function PrivateRoute(props: PrivateRouteProps) {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
}
