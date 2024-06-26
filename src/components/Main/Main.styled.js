import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1200px) {
    /* display: block; */
  }
`;

export const DataLoading = styled.p`
  font-size: 24px;
`;
