import Register from "../../components/Register/Register";
import { GlobalStyleSignup, WrapperSign } from "../../global.styled";

export const RegisterPage = ({ setAuth, setUserData }) => {

  setAuth(false);
  setUserData("");

  return (
    <>
      <GlobalStyleSignup />
      <WrapperSign>
        <Register setAuth={setAuth} setUserData={setUserData} />
      </WrapperSign>
    </>
  );
};

export default RegisterPage;
