import * as L from "./Login.styled";
import { Link, useNavigate } from "react-router-dom";
import * as Sh from "../../shared.styled";
import { useState } from "react";
import { loginUser } from "../../api";
import { appRoutes } from "../../routes";
import { saveUserToLocalStorage } from "../../lib/helper";

const Login = ({ setAuth, setUser }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();

    if (!formValues.login || formValues.login.trim() === "") {
      setError("Не введена почта");
      return;
    }

    if (!formValues.password || formValues.password.trim() === "") {
      setError("Не введен пароль");
      return;
    }

    try {
      const response = await loginUser({
        login: formValues.login,
        password: formValues.password,
      });

      console.log("LOGIN RESPONSE", response);
      console.log(response.user);
      saveUserToLocalStorage(response.user);

      setAuth(true);
      setUser(response.user);
      navigate(appRoutes.MAIN);
    } catch (error) {
      console.error(error.message);
      if (error.message === "Failed to fetch") {
        setError("Ошибка соединения");
        return;
      }
      setError(error.message);
    }
  };

  return (
    <L.ContainerSignin>
      <L.Modal>
        <L.ModalBlock>
          <L.ModalTtl>
            <L.Htitle>Вход</L.Htitle>
          </L.ModalTtl>
          <L.ModalFormLogin action="#" onSubmit={onLogin}>
            <Sh.Input
              type="text"
              name="login"
              placeholder="Эл. почта"
              value={formValues.login}
              onChange={onInputChange}
            />
            <Sh.Input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formValues.password}
              onChange={onInputChange}
            />
            <br />
            {error && <L.ErrorP>{error}</L.ErrorP>}
            <L.ModalBtnEnterHover01 $primary type="submit">
              Войти
            </L.ModalBtnEnterHover01>
            <L.ModalFormGroup>
              <L.ModalFormGroupP>Нужно зарегистрироваться?</L.ModalFormGroupP>
              <Link to="/register">
                <L.ModalFormGroupA>Регистрируйтесь здесь</L.ModalFormGroupA>
              </Link>
            </L.ModalFormGroup>
          </L.ModalFormLogin>
        </L.ModalBlock>
      </L.Modal>
    </L.ContainerSignin>
  );
};

export default Login;
