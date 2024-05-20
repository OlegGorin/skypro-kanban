import "./App.css";
import PopUser from "./components/Popups/PopUser";
import PopNewCard from "./components/Popups/PopNewCard";
import PopBrowse from "./components/Popups/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";
import { cardList } from "../data";
import { GlobalStyle, Wrapper } from "./global.styled";

function App() {
  const [cards, setCards] = useState(cardList);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopUser />
        <PopNewCard />
        <PopBrowse />

        <Header setCards={setCards} cards={cards} />
        <Main cardList={cards} />
      </Wrapper>
    </>
  );
}

export default App;
