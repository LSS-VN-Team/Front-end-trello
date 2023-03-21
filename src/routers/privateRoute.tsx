import { ROUTES } from "constants/routers";
import { Navigate, Outlet } from "react-router-dom";

export interface PrivateRouteProps {}

export default function PrivateRoute(props: PrivateRouteProps) {
  // check if user logged in
  const isAuth = true;

  return isAuth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
}
