import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "constants/routers";
import PrivateRoute from "./privateRoute";
import HomePage from "pages/home";
import LoginPage from "pages/login";
import NotFoundPage from "pages/notFound";

const Router: FC = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
