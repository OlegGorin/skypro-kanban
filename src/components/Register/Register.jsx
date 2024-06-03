import * as R from "./Register.styled";
import * as Sh from "../../shared.styled";
import { ErrorP } from "../Login/Login.styled";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { regUser } from "../../api";
import { saveUserToLocalStorage } from "../../lib/helper";
import { appRoutes } from "../../routes";

const Register = ({ setAuth, setUser }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onReg = async (event) => {
    event.preventDefault();

    if (!formValues.name || formValues.name.trim() === "") {
      setError("Не введено имя");
      return;
    }

    if (!formValues.login || formValues.login.trim() === "") {
      setError("Не введена почта");
      return;
    }

    if (!formValues.password || formValues.password.trim() === "") {
      setError("Не введен пароль");
      return;
    }

    try {
      const response = await regUser({
        name: formValues.name,
        login: formValues.login,
        password: formValues.password,
      });

      console.log("REGISTER RESPONSE", response);
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
    <R.ContainerSignup>
      <R.Modal>
        <R.ModalBlock>
          <R.ModalTtl>
            <R.ModalTtlH2>Регистрация</R.ModalTtlH2>
          </R.ModalTtl>
          <R.ModalFormLogin action="#">
            <Sh.Input
              type="text"
              name="name"
              placeholder="Имя"
              value={formValues.name}
              onChange={onInputChange}
            />
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
            {error && <ErrorP>{error}</ErrorP>}
            <R.ModalBtnSignupEnterHover01 $primary>
              <Link>
                <R.ModalBtnSignupEnterA
                  onClick={onReg}
                >
                  Зарегистрироваться
                </R.ModalBtnSignupEnterA>
              </Link>{" "}
            </R.ModalBtnSignupEnterHover01>
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
