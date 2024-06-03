import "../../App.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { useState, useEffect } from "react";
// import { cardList } from "../../data";
import { GlobalStyle, Wrapper } from "../../global.styled";
import { Outlet } from "react-router-dom";
import { DataLoading } from "../../components/Main/Main.styled";
import { getCards } from "../../api";

export default function MainPage({ setAuth, user, setUser }) {
  // const [cards, setCards] = useState(cardList);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCards({ 
          token: user.token,
        });
        console.log(response);
        setCards(response.tasks);
      } catch (error) {
        console.error(error);
        setError("Ошибка при получении задач");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
}, [user.token]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
        <Header 
          setCards={setCards}
          cards={cards}
          setAuth={setAuth}
          setUser={setUser}
        />
        {error && <p>{error}</p>}
        {!error & isLoading ? (
          <DataLoading>Данные загружаются...</DataLoading>
        ) : ( 
          <Main cardList={cards} />
        )}
      </Wrapper>
    </>
  );
}
