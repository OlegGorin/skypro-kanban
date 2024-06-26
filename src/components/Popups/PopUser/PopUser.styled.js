import styled from "styled-components";
import * as Sh from "../../../shared.styled";

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopExit = styled.div`
  display: block;
  /* display: none; */
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const PopExitTtl = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

// export const PopExitForm = styled.form`
export const PopExitForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PopExitFormGroup = styled(PopExitForm)`
  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

export const PopExitExitYesHover01Btn = styled(Sh.Button)`
  @media only screen and (max-width: 375px) {
    display: block;
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }

  ${Sh.Hover01};
`;

export const PopExitExitNoHover03Btn = styled(Sh.Button)`
  @media only screen and (max-width: 375px) {
    display: block;
    width: 100%;
    height: 40px;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }

  ${Sh.Hover03};
`;

export const LinkFontNoPrimary = styled.p`
  color: #565eef;
  ${Sh.Hover03a};
`;

export const LinkFontPrimary = styled.p`
  color: #ffffff;
`;
