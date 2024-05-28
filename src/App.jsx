import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import { useState } from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import { useNavigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// export let isQuit = null;

function App() {
  // const isAuth = false;

  const [isAuth, setAuth] = useState(false);

  const appRoutes = {
    LOGIN: "/login",
    REGISTER: "/register",
    MAIN: "/",
    CARD: "/card/:id",
    EXIT: "/exit",
    NOT_FOUND: "*",
  };

const navigate = useNavigate();

const login = (e) => {
  e.preventDefault();
  setAuth(true);
  navigate(appRoutes.MAIN);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.CARD} element={<CardPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>

      <Route path={appRoutes.LOGIN} element={<LoginPage login = {login} />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
