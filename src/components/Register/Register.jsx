import * as R from "./Register.styled";
import * as Sh from "../../shared.styled";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <R.ContainerSignup>
      <R.Modal>
        <R.ModalBlock>
          <R.ModalTtl>
            <R.ModalTtlH2>Регистрация</R.ModalTtlH2>
          </R.ModalTtl>
          <R.ModalFormLogin action="#">
            <Sh.Input type="text" name="first-name" placeholder="Имя" />
            <Sh.Input type="text" name="login" placeholder="Эл. почта" />
            <Sh.Input type="password" name="password" placeholder="Пароль" />
            <R.ModalBtnSignupEnterHover01 $primary>
              <Link>
                <R.ModalBtnSignupEnterA>
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
