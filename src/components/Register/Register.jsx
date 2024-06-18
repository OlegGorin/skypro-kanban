import * as R from "./Register.styled";
import * as Sh from "../../shared.styled";
import { ErrorP } from "../Login/Login.styled";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { regUser } from "../../api";
import { appRoutes } from "../../routes";
import { useUser } from "../../hooks/useUser";

const Register = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [logError, setLogError] = useState(false);
  const [passError, setPassError] = useState(false);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    setLogError(false);
    setPassError(false);
    setNameError(false);
  };

  const onReg = async (event) => {
    event.preventDefault();

    if (!formValues.name || formValues.name.trim() === "") {
      setError("Не введено имя");
      setNameError(true);
      return;
    }

    if (!formValues.login || formValues.login.trim() === "") {
      setError("Не введена почта");
      setLogError(true);
      return;
    }

    if (!formValues.password || formValues.password.trim() === "") {
      setError("Не введен пароль");
      setPassError(true);
      return;
    }

    try {
      const response = await regUser({
        name: formValues.name,
        login: formValues.login,
        password: formValues.password,
      });

      console.log("REGISTER RESPONSE", response);

      setError(null);
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
    <R.ContainerSignup>
      <R.Modal>
        <R.ModalBlock>
          <R.ModalTtl>
            <R.ModalTtlH2>Регистрация</R.ModalTtlH2>
          </R.ModalTtl>
          <R.ModalFormLogin action="#">
            {!nameError ? (
              <Sh.Input
                type="text"
                name="name"
                placeholder="Имя"
                value={formValues.name}
                onChange={onInputChange}
              />
            ) : (
              <Sh.InputBorderRed
                type="text"
                name="name"
                placeholder="Имя"
                value={formValues.name}
                onChange={onInputChange}
              />
            )}
            {!logError ? (
              <Sh.Input
                type="text"
                name="login"
                placeholder="Эл. почта"
                value={formValues.login}
                onChange={onInputChange}
              />
            ) : (
              <Sh.InputBorderRed
                type="text"
                name="login"
                placeholder="Эл. почта"
                value={formValues.login}
                onChange={onInputChange}
              />
            )}
            {!passError ? (
              <Sh.Input
                type="password"
                name="password"
                placeholder="Пароль"
                value={formValues.password}
                onChange={onInputChange}
              />
            ) : (
              <Sh.InputBorderRed
                type="password"
                name="password"
                placeholder="Пароль"
                value={formValues.password}
                onChange={onInputChange}
              />
            )}
            <br />
            {error && <ErrorP>{error}</ErrorP>}
            {!nameError & !logError & !passError ? (
            <R.ModalBtnSignupEnterHover01 $primary>
              <Link>
                <R.ModalBtnSignupEnterA onClick={onReg}>
                  Зарегистрироваться
                </R.ModalBtnSignupEnterA>
              </Link>
            </R.ModalBtnSignupEnterHover01>
            ) : (
              <R.ModalBtnSignupEnterHover01Gray disabled>
              <Link>
                <R.ModalBtnSignupEnterA onClick={onReg}>
                  Зарегистрироваться
                </R.ModalBtnSignupEnterA>
              </Link>
            </R.ModalBtnSignupEnterHover01Gray>
            )
}
            <R.ModalFormGroup>
              <R.ModalFormGroupP>Уже есть аккаунт?</R.ModalFormGroupP>
              <Link to="/login">
                <R.ModalFormGroupA>Войдите здесь</R.ModalFormGroupA>
              </Link>
            </R.ModalFormGroup>
          </R.ModalFormLogin>
        </R.ModalBlock>
      </R.Modal>
    </R.ContainerSignup>
  );
};

export default Register;
