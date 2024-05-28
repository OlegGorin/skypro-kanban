import { useState } from "react";
import { Container } from "../../global.styled";
import * as H from "./Header.styled";
import { Link } from "react-router-dom";

const Header = ({ setCards, cards }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const onCardAdd = () => {
    const newCard = {
      id: Date.now(),
      title: "TEST",
      topic: "Research",
      date: "12.05.24",
      status: "Без статуса",
    };
    const newCardList = [...cards, newCard];
    setCards(newCardList);
  };

  return (
    <H.Header>
      <Container>
        <H.HeaderBlock>
          <H.HeaderLogoLight>
            <Link>
              <H.Img src="../public/logo.png" alt="logo"></H.Img>
            </Link>
          </H.HeaderLogoLight>
          <H.HeaderLogoDark>
            <Link>
              <H.Img src="../public/logo_dark.png" alt="logo"></H.Img>
            </Link>
          </H.HeaderLogoDark>
          <H.HeaderNav>
            <H.HeaderBtnMainNew $primary onClick={onCardAdd}>
              Создать новую задачу
            </H.HeaderBtnMainNew>
            <H.HeaderUser onClick={handleOpen}>Ivan Ivanov</H.HeaderUser>
            {isOpen && (
              <H.HeaderPopUserSet>
                <H.PopUserSetName>Ivan Ivanov</H.PopUserSetName>
                <H.PopUserSetMail>ivan.ivanov@gmail.com</H.PopUserSetMail>
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
