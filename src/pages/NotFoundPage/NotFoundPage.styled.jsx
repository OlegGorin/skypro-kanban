import styled from "styled-components";
import { Button, Hover03, Hover03a } from "../../shared.styled";

export const NotFoundPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Img = styled.img`
  width: 40%;
  align-self: center;
`;

export const GoMainBtn = styled(Button)`
  ${Hover03};
`;

export const LinkMain = styled.p`
  color: #ffffff;
  ${Hover03a};
`;
