import Login from "../../components/Login/Login";
import { GlobalStyleSignin, WrapperSign } from "../../global.styled";

  export const LoginPage = () => {  
  return (
    <>
      <GlobalStyleSignin />
      <WrapperSign>
        <Login />        
      </WrapperSign>
    </>
  );
};

export default LoginPage;
