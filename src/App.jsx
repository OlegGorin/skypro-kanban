import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { appRoutes } from "./routes";
import { getUserFromLocalStorage } from "./lib/helper";

export const user = null;

const App = () => {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [isAuth, setAuth] = useState(false);

  const login = (event) => {
    event.preventDefault();
    if (user) {
      setAuth(true);
    }
  };

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={appRoutes.MAIN} element={<MainPage user={user} />}>
          <Route path={appRoutes.CARD} element={<CardPage />} />
          <Route
            path={appRoutes.EXIT}
            element={<ExitPage setAuth={setAuth} setUser={setUser} />}
          />
        </Route>
      </Route>

      <Route
        path={appRoutes.LOGIN}
        element={
          <LoginPage login={login} setAuth={setAuth} setUser={setUser} />
        }
      />
      <Route
        path={appRoutes.REGISTER}
        element={<RegisterPage setAuth={setAuth} setUser={setUser} />}
      />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
