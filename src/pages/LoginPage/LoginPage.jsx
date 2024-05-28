import Login from "../../components/Login/Login";
import { GlobalStyleSignin, WrapperSign } from "../../global.styled";

export const LoginPage = ({ login }) => {
  return (
    <>
      <GlobalStyleSignin />
      <WrapperSign>
        <Login login={login} />
      </WrapperSign>
    </>
  );
};

export default LoginPage;
