import styled, { css } from "styled-components";

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = css`
  &:hover {
    color: #33399b;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  /* width: 100%; */
  width: 153px;
  height: 30px;
  background-color: ${(props) => (props.$primary ? "#565eef" : "transparent")};
  border-radius: 4px;
  /* margin-top: 20px;
  margin-bottom: 20px; */
  border: ${(props) =>
    props.$primary ? "none" : "0.7px solid var(--palette-navy-60, #565eef)"};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${(props) => (props.$primary ? "#ffffff" : "#565eef")};
  margin-right: 10px;

  ${hover03}
`;
