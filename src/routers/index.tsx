import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "constants/routers";
import PrivateRoute from "./privateRoute";
import HomePage from "pages/home";
import LoginPage from "pages/login";
import NotFoundPage from "pages/notFound";
import ProjectBoard from "pages/board";

const Router: FC = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
        <Route path={ROUTES.BOARD} element={<ProjectBoard />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
