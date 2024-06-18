import styled, { css } from "styled-components";

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover02 = css`
  &:hover {
    color: #33399b;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const Hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const Hover03a = css`
  &:hover {
    color: #ffffff;
  }
`;

export const Button = styled.button`
  width: 153px;
  height: 30px;
  background-color: ${(props) => (props.$primary ? "#565eef" : "transparent")};
  border-radius: 4px;
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

  /* ${Hover03} */
`;

export const Input = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;

  &:first-child {
    margin-bottom: 7px;
  }
  &:not(:last-child) {
    margin-bottom: 7px;
  }

  &::-moz-placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const InputBorderRed = styled(Input)`
  border: 0.7px solid red;
`;
