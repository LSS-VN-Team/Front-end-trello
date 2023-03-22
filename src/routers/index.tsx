import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "constants/routers";
import PrivateRoute from "./privateRoute";
import HomePage from "pages/home";
import LoginPage from "pages/login";
import NotFoundPage from "pages/notFound";
// import RegisterPage from "pages/register";
import RegisterComponent from "components/pageComponents/register";

const Router: FC = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path={ROUTES.REGISTER } element={<RegisterComponent />} />
    </Routes>
  );
};

export default Router;
