import { NotFoundPageStyle, Img } from "./NotFoundPage.styled";
import { Link } from "react-router-dom";
import { GoMainBtn, LinkMain } from "./NotFoundPage.styled";
import { GlobalStyle } from "../../global.styled";

const NotFoundPage = () => {
  return (
    <>
    <GlobalStyle />
    <NotFoundPageStyle>
      <Img
        src="https://avatars.mds.yandex.net/i?id=df1bf61d25c14562b5f09d685bf74bcf800aaf80-11548596-images-thumbs&n=13"
        alt="Страница не найдена"
      />
      <GoMainBtn $primary>
        <Link to="/">
          <LinkMain>На главную... </LinkMain>
        </Link>{" "}
      </GoMainBtn>
    </NotFoundPageStyle>
    </>
  );
};

export default NotFoundPage;
