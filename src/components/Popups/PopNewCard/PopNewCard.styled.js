import styled from "styled-components";
import * as Sh from "../../../shared.styled";

export const PopNewCard = styled.div`
  /* display: none; */
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }

  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTtlH3 = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 1px;
      color: #94a6be;
      letter-spacing: -0.14px;
    }
  }
`;

export const FormNewArea = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  /* margin: 20px 0; */

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 1px;
      color: #94a6be;
      letter-spacing: -0.14px;
    }
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoriesTheme = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "orange"
      ? "#ffe4c2"
      : props.color === "green"
      ? "#b4fdd1"
      : "#e9d4ff"};
  color: ${(props) =>
    props.color === "orange"
      ? "#ff6d00"
      : props.color === "green"
      ? "#06b16e"
      : "#9a48f1"};
  opacity: ${(props) => (props.checked ? "1" : "0.4")};

  input {
    display: none;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const CategoriesThemeP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const CategoriesThemeOrangeActive = styled(CategoriesTheme)`
  background-color: #ffe4c2;
  color: #ff6d00;
  opacity: 1 !important;
`;

export const CategoriesThemeGreen = styled(CategoriesTheme)`
  background-color: #b4fdd1;
  color: #06b16e;
`;

export const CategoriesThemePurple = styled(CategoriesTheme)`
  background-color: #e9d4ff;
  color: #9a48f1;
`;

export const CategoriesThemeGray = styled(CategoriesTheme)`
  background: #94a6be;
  color: #ffffff;
`;

export const OrangeP = styled(CategoriesThemeP)`
  background-color: #ffe4c2;
  color: #ff6d00;
`;

export const GreenP = styled(CategoriesThemeP)`
  background-color: #b4fdd1;
  color: #06b16e;
`;

export const PurpleP = styled(CategoriesThemeP)`
  background-color: #e9d4ff;
  color: #9a48f1;
`;

export const GrayP = styled(CategoriesThemeP)`
  background: #94a6be;
  color: #ffffff;
`;

export const CategoriesPSubttl = styled(Subttl)`
  margin-bottom: 14px;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FormNewCreateBtn = styled(Sh.Button)`
  width: 132px;
  line-height: 1;
  float: right;
  margin-right: 0;

  ${Sh.Hover01}

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;
