import Login from "../../components/Login/Login";
import { GlobalStyleSignin, WrapperSign } from "../../global.styled";

// export const LoginPage = ({ login }) => {
export const LoginPage = ({ setAuth, setUser }) => {
  return (
    <>
      <GlobalStyleSignin />
      <WrapperSign>
        <Login setAuth={setAuth} setUser={setUser} />        
      </WrapperSign>
    </>
  );
};

export default LoginPage;
