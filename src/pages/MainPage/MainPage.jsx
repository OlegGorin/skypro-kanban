import "../../App.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { useState, useEffect } from "react";
import { GlobalStyle, Wrapper } from "../../global.styled";
import { Outlet } from "react-router-dom";
import { DataLoading } from "../../components/Main/Main.styled";
import { getCards } from "../../api";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks.js";

export default function MainPage() {
  const { userData } = useUser();
  const {tasks, setTasks} = useTasks([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCards({ 
          token: userData.token,
        });
        setTasks(response.tasks);
      } catch (error) {
        console.error(error);
        setError("Ошибка при получении задач");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
}, [userData.token, setTasks]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
        <Header 
          setTasks={setTasks}
          tasks={tasks}
          userData={userData}
        />
        {error && <p>{error}</p>}
        {!error & isLoading ? (
          <DataLoading>Данные загружаются...</DataLoading>
        ) : ( 
          <Main cardList={tasks} />
        )}
      </Wrapper>
    </>
  );
}
