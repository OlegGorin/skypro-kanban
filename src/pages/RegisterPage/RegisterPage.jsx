import Register from "../../components/Register/Register";
import { GlobalStyleSignup, WrapperSign } from "../../global.styled";

export const RegisterPage = ({ setAuth, setUser }) => {

  setAuth(false);
  setUser("");

  return (
    <>
      <GlobalStyleSignup />
      <WrapperSign>
        <Register setAuth={setAuth} setUser={setUser} />
      </WrapperSign>
    </>
  );
};

export default RegisterPage;
