import styled from "styled-components";
import * as Sh from "../../shared.styled";

export const ContainerSignin = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    background-color: #ffffff;
  }
`;

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

export const ModalTtl = styled.div`
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
`;

export const Htitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const ModalFormGroup = styled.div`
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
  text-align: center;
`;

export const ModalFormGroupA = styled.div`
  color: rgba(148, 166, 190, 0.4);
  text-decoration: underline;
`;
export const ModalFormGroupP = styled.p``;

export const ModalFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBtnEnterHover01 = styled(Sh.Button)`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 0;

  ${Sh.Hover01}

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const ErrorP = styled.p`
  color: darkred;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
`;
