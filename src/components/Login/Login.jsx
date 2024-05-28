import * as L from "./Login.styled";
import { Link } from "react-router-dom";
import * as Sh from "../../shared.styled";

const Login = ({ login }) => {
  return (
    <L.ContainerSignin>
      <L.Modal>
        <L.ModalBlock>
          <L.ModalTtl>
            <L.Htitle>Вход</L.Htitle>
          </L.ModalTtl>
          <L.ModalFormLogin action="#" onSubmit={login}>
            <Sh.Input type="text" name="login" placeholder="Эл. почта" />
            <Sh.Input type="password" name="password" placeholder="Пароль" />
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
