import { useState } from "react";
import { Container } from "../../global.styled";
import * as H from "./Header.styled";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../routes";
import { useUser } from "../../hooks/useUser";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const {userData} = useUser();
  const currentUser = userData.name;
  const currentLogin = userData.login;

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const navigate = useNavigate();

  const onCardAdd = () => {
    navigate(appRoutes.NEWCARD);
  };

  return (
    <H.Header>
      <Container>
        <H.HeaderBlock>
          <H.HeaderLogoLight>
            <Link>
              <H.Img src="../images/logo.png" alt="logo"></H.Img>
            </Link>
          </H.HeaderLogoLight>
          <H.HeaderLogoDark>
            <Link>
              <H.Img src="../images/logo_dark.png" alt="logo"></H.Img>
            </Link>
          </H.HeaderLogoDark>
          <H.HeaderNav>
            <H.HeaderBtnMainNew $primary onClick={onCardAdd}>
              Создать новую задачу
            </H.HeaderBtnMainNew>
            <H.HeaderUser onClick={handleOpen}>{currentUser}</H.HeaderUser>            
            {isOpen && (
              <H.HeaderPopUserSet>
                <H.PopUserSetName>{currentUser}</H.PopUserSetName>
                <H.PopUserSetMail>{currentLogin}</H.PopUserSetMail>                
                <H.PopUserSetTheme>
                  <H.PopUserSetThemeP>Темная тема</H.PopUserSetThemeP>
                  <H.Input></H.Input>
                </H.PopUserSetTheme>
                <H.HeaderBtnHover03>
                  <Link to="/exit">
                    <H.LinkBtnHover03>Выйти</H.LinkBtnHover03>
                  </Link>
                </H.HeaderBtnHover03>
              </H.HeaderPopUserSet>
            )}
          </H.HeaderNav>
        </H.HeaderBlock>
      </Container>
    </H.Header>
  );
};

export default Header;
