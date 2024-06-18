import Calendar from "../../Calendar/Calendar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as P from "./PopBrowse.styled";
import * as Pu from "../PopUser/PopUser.styled";
import * as PNC from "../PopNewCard/PopNewCard.styled";
import { useEffect, useRef, useState } from "react";
import { deleteCard, changeCard } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { useTasks } from "../../../hooks/useTasks";
import { statusList } from "../../../lib/StatusList";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../../routes";

const PopBrowse = () => {
  const { id } = useParams();
  const [selDate, setDate] = useState();

  const { userData } = useUser();
  const { tasks, setTasks, topicColor } = useTasks();
  const [edit, setEdit] = useState(false);
  const input = useRef();

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const selectedTask = () => {
    try {
      const selTask = tasks.find((task) => task._id === id);
      return selTask;
    } catch (error) {
      console.log(error.message);
    }
  };
  selectedTask();

  const [editTask, setEditTask] = useState(selectedTask());

  // console.log("SELECTED_TASK", selectedTask());

  useEffect(() => {
    setDate(selectedTask().date);
  }, [selectedTask()]);

  const onEditTask = () => {
    setEdit(true);
    input.current.readOnly = false;
  };

  const onCancel = () => {
    setEdit(false);
    input.current.readOnly = true;
  };

  const onSaveTask = async (event) => {
    event.preventDefault();
    const changedTask = { ...editTask, date: selDate };

    try {
      const response = await changeCard({
        ...changedTask,
        id: id,
        token: userData.token,
      });

      // console.log("CHANGED_CARD RESPONSE", response);

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

  const onDeleteTask = async () => {
    try {
      const response = await deleteCard({ token: userData.token, id: id });

      // console.log("DELETE_CARD RESPONSE", response);

      setError(null);
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
    <P.PopBrowse id="popBrowse">
      <P.PopBrowseContainer>
        <P.PopBrowseBlock>
          <P.PopBrowseContent>
            <P.PopBrowseTopBlock>
              <P.PopBrowseTtlH3>
                {editTask.title}
              </P.PopBrowseTtlH3>
              <P.CategoriesTheme $topicColor={topicColor(editTask.topic)}>
                <P.TopicText>{editTask.topic}</P.TopicText>
              </P.CategoriesTheme>
            </P.PopBrowseTopBlock>
            <P.Status>
              <P.StatusPSubttl>Статус</P.StatusPSubttl>
              <P.StatusThemes>
                {!edit && (
                  <P.StatusTheme $selected>{editTask.status}</P.StatusTheme>
                )}
                {edit &&
                  statusList.map((status) => (
                    <P.StatusTheme
                      $checked
                      key={status}
                      status={status}
                      checked={editTask.status === status}
                    >
                      <input
                        type="radio"
                        name="status"
                        value={status}
                        checked={editTask.status === status}
                        onChange={() => {
                          setEditTask({ ...editTask, status: status });
                          // setTopicVal(topic.name);
                        }}
                      />
                      <p>{status}</p>
                    </P.StatusTheme>
                  ))}
              </P.StatusThemes>
            </P.Status>
            <P.PopBrowseWrap>
              <P.PopBrowseForm id="formBrowseCard" action="#">
                <P.FormBrowseBlock>
                  <P.Label htmlFor="textArea01">
                    <PNC.Subttl>Описание задачи</PNC.Subttl>
                  </P.Label>
                  <P.FormBrowseArea
                    ref={input}
                    name="text"
                    id="textArea01"
                    readOnly
                    defaultValue={editTask.description}
                    placeholder="Введите описание задачи..."
                    onChange={(e) =>
                      setEditTask({ ...editTask, description: e.target.value })
                    }
                  ></P.FormBrowseArea>
                </P.FormBrowseBlock>
              </P.PopBrowseForm>
              <Calendar selDate={selDate} setDate={setDate} />
            </P.PopBrowseWrap>
            {!edit && (
              <P.PopBrowseBtnBrowse>
                <P.BtnGroup>
                  <P.BtnBrowseEditHover03 onClick={onEditTask}>
                    <Link>
                      <Pu.LinkFontNoPrimary>
                        Редактировать задачу
                      </Pu.LinkFontNoPrimary>
                    </Link>
                  </P.BtnBrowseEditHover03>
                  <P.BtnBrowseDeleteHover03 onClick={onDeleteTask}>
                    <Link>
                      <Pu.LinkFontNoPrimary>
                        Удалить задачу
                      </Pu.LinkFontNoPrimary>
                    </Link>
                  </P.BtnBrowseDeleteHover03>
                </P.BtnGroup>
                <P.BtnBrowseCloseHover01 $primary>
                  <Link to="/">
                    <Pu.LinkFontPrimary>Закрыть</Pu.LinkFontPrimary>
                  </Link>
                </P.BtnBrowseCloseHover01>
              </P.PopBrowseBtnBrowse>
            )}
            {edit && (
              <P.PopBrowseBtnEdit>
                <P.BtnGroup>
                  <P.BtnEditEditHover01 $primary onClick={onSaveTask}>
                    <Link>
                      <Pu.LinkFontPrimary>Сохранить</Pu.LinkFontPrimary>
                    </Link>
                  </P.BtnEditEditHover01>
                  <P.BtnEditEditHover03 onClick={onCancel}>
                    <Link>
                      <Pu.LinkFontNoPrimary>Отменить</Pu.LinkFontNoPrimary>
                    </Link>
                  </P.BtnEditEditHover03>
                  <P.BtnEditDeleteHover03 id="btnDelete">
                    <Link>
                      <Pu.LinkFontNoPrimary>
                        Удалить задачу
                      </Pu.LinkFontNoPrimary>
                    </Link>
                  </P.BtnEditDeleteHover03>
                </P.BtnGroup>
                <P.BtnEditCloseHover01 $primary>
                  <Link to="/">
                    <Pu.LinkFontPrimary>Закрыть</Pu.LinkFontPrimary>
                  </Link>
                </P.BtnEditCloseHover01>
              </P.PopBrowseBtnEdit>
            )}
          </P.PopBrowseContent>
        </P.PopBrowseBlock>
      </P.PopBrowseContainer>
    </P.PopBrowse>
  );
};

export default PopBrowse;
