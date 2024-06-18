import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import NewCardPage from "./pages/NewCardPage/NewCardPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { appRoutes } from "./routes";

const App = () => {

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.CARD} element={<CardPage />} />
          <Route path={appRoutes.NEWCARD} element={<NewCardPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>

      <Route path={appRoutes.LOGIN} element={<LoginPage />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
