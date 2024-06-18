import Register from "../../components/Register/Register";
import { GlobalStyleSignup, WrapperSign } from "../../global.styled";

export const RegisterPage = () => {
  return (
    <>
      <GlobalStyleSignup />
      <WrapperSign>
        <Register />
      </WrapperSign>
    </>
  );
};

export default RegisterPage;
