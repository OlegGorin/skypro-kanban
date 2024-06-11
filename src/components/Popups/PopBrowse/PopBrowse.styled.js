import styled from "styled-components";
import * as PNC from "../PopNewCard/PopNewCard.styled";
import * as Sh from "../../../shared.styled";

export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
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
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;

  @media screen and (max-width: 495px) {
    display: block;
    /* display: none; */
    margin-bottom: 20px;
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtlH3 = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesThemeThemeTopOrangeActiveCategory = styled(
  PNC.CategoriesThemeOrangeActive
)`
  display: block;

  @media screen and (max-width: 495px) {
    /* display: block; */
    display: none;
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;
`;

export const StatusPSubttl = styled(PNC.Subttl)`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
`;

export const StatusThemeP = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const StatusThemeHide = styled(StatusTheme)`
  display: none;
`;

export const StatusThemeGray = styled(StatusTheme)`
  background: #94a6be;
`;

export const StatusThemeGrayP = styled(StatusThemeP)`
  background: #94a6be;
  color: #ffffff;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const ThemeDown = styled(PopBrowseContent)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: flex-start;
`;

export const CategoriesPSubttl = styled(PNC.Subttl)`
  margin-bottom: 14px;
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 495px) {
    display: block;
    width: 100%;
    margin-right: 0px;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 495px) {
    display: block;
    width: 100%;
    margin-right: 0px;
  }
`;

export const BtnBrowseEdit = styled(Sh.Button)`
  width: auto;
  margin-right: 8px;
  margin-bottom: 10px;
  padding: 0 14px;
  cursor: pointer;

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const BtnBrowseEditHover03 = styled(BtnBrowseEdit)`
  ${Sh.Hover03};
`;

export const BtnBrowseDeleteHover03 = styled(BtnBrowseEditHover03)``;

export const BtnBrowseCloseHover01 = styled(BtnBrowseEdit)`
  ${Sh.Hover01};
`;

export const PopBrowseBtnEdit = styled(PopBrowseBtnBrowse)`
  display: none;
`;

export const BtnEditEditHover01 = styled(BtnBrowseEdit)`
  ${Sh.Hover01};
`;

export const BtnEditEditHover03 = styled(BtnBrowseEdit)`
  ${Sh.Hover03};
`;

export const BtnEditDeleteHover03 = styled(BtnBrowseEdit)`
  ${Sh.Hover03};
`;

export const BtnEditCloseHover01 = styled(BtnBrowseCloseHover01)``;
