import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "constants/routers";
import PrivateRoute from "./privateRoute";
import HomePage from "pages/home";
import LoginPage from "pages/login";
import NotFoundPage from "pages/notFound";
import ProjectBoard from "pages/board";
import RegisterPage from "pages/register";
import TaskCardComponent from "components/pageComponents/taskCard";

const Router: FC = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
        <Route path={ROUTES.BOARD} element={<ProjectBoard />} />
        <Route path={ROUTES.TASKCARDPAGE} element={<TaskCardComponent />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
};

export default Router;
