import { Link, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import * as PC from "./PopNewCard.styled";
import { useState } from "react";
import { addCard } from "../../../api";
import * as L from "../../Login/Login.styled";
import { appRoutes } from "../../../routes";
import { useUser } from "../../../hooks/useUser";
import { useTasks } from "../../../hooks/useTasks";
import { topics } from "../../../lib/topic";

const PopNewCard = () => {
  const [selDate, setDate] = useState(null);
  const [formValues, setFormValues] = useState({
    title: "",
    text: "",
  });

  const { userData } = useUser();
  const { setTasks } = useTasks();

  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    topic: "Research",
    status: "Без статуса",
    description: "",
    date: null,
  });

  const [error, setError] = useState(null);

  const [topicVal, setTopicVal] = useState("Research");

  const onInputNewCard = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onCreateTask = async (event) => {
    event.preventDefault();

    if (!selDate) {
      setError("Не выбрана дата исполнения задачи");
      return;
    }

    if (!formValues.title || formValues.title.trim() === "") {
      setError("Не введено название задачи");
      return;
    }

    if (!formValues.text || formValues.text.trim() === "") {
      setError("Не введено описание задачи");
      return;
    }

    if (!topicVal) {
      setError("Не выбрана тема задачи");
      return;
    }

    try {
      const response = await addCard({
        token: userData.token,
        title: formValues.title,
        topic: topicVal,
        status: "Без статуса",
        description: formValues.text,
        date: selDate,
      });

      console.log("ADD_CARD RESPONSE", response);

      setTasks(response.tasks);
      navigate(appRoutes.MAIN);
    } catch (error) {
      console.error(error.message);
      if (error.message === "Failed to fetch") {
        setError("Ошибка соединения");
        return;
      }
      setError(error.message);
    }
  };

  return (
    <PC.PopNewCard>
      <PC.PopNewCardContainer>
        <PC.PopNewCardBlock>
          <PC.PopNewCardContent>
            <PC.PopNewCardTtlH3>Создание задачи</PC.PopNewCardTtlH3>
            <Link to="/">
              <PC.PopNewCardClose>&#10006;</PC.PopNewCardClose>
            </Link>
            <PC.PopNewCardWrap>
              <PC.PopNewCardForm id="formNewCard" action="#">
                <PC.FormNewBlock>
                  <PC.Label htmlFor="formTitle">
                    <PC.Subttl>Название задачи</PC.Subttl>
                  </PC.Label>
                  <PC.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formValues.name}
                    onChange={onInputNewCard}
                    autoFocus=""
                    // onChange={(e) =>
                    //   setTask({ ...task, title: e.target.value })
                    // }
                  ></PC.FormNewInput>
                </PC.FormNewBlock>
                <PC.FormNewBlock>
                  <PC.Label htmlFor="textArea">
                    <PC.Subttl>Описание задачи</PC.Subttl>
                  </PC.Label>
                  <PC.FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formValues.text}
                    onChange={onInputNewCard}
                    // onChange={(e) =>
                    //   setTask({ ...task, description: e.target.value })
                    // }
                  ></PC.FormNewArea>
                </PC.FormNewBlock>
              </PC.PopNewCardForm>
              <Calendar
                selDate={selDate}
                setDate={setDate}
              />
            </PC.PopNewCardWrap>
            <PC.Categories>
              <PC.CategoriesPSubttl>Категория</PC.CategoriesPSubttl>
              <PC.CategoriesThemes>
                {topics.map((topic) => (
                  <PC.CategoriesTheme
                    key={topic.name}
                    color={topic.color}
                    checked={task.topic === topic.name}
                  >
                    <input
                      type="radio"
                      name="topic"
                      value={topic.name}
                      checked={task.topic === topic.name}
                      // onChange={() => setTask({ ...task, topic: topic.name })}
                      onChange={() => {
                        setTask({ ...task, topic: topic.name });
                        setTopicVal(topic.name);
                      }}
                    />
                    <p>{topic.name}</p>
                  </PC.CategoriesTheme>
                ))}
              </PC.CategoriesThemes>
            </PC.Categories>
            <br />
            {error && <L.ErrorP>{error}</L.ErrorP>}
            <PC.FormNewCreateBtn $primary onClick={onCreateTask}>
              Создать задачу
            </PC.FormNewCreateBtn>
          </PC.PopNewCardContent>
        </PC.PopNewCardBlock>
      </PC.PopNewCardContainer>
    </PC.PopNewCard>
  );
};

export default PopNewCard;
