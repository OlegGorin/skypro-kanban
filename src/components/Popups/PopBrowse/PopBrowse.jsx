import Calendar from "../../Calendar/Calendar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as P from "./PopBrowse.styled";
import * as Pu from "../PopUser/PopUser.styled";
import * as PNC from "../PopNewCard/PopNewCard.styled";
import { useState } from "react";
// import { deleteCard } from "../../../api";
// import { useUser } from "../../../hooks/useUser";
// import { useTasks } from "../../../hooks/useTasks";
// import { useNavigate } from "react-router-dom";
// import { appRoutes } from "../../../routes";

const PopBrowse = () => {
  const { id } = useParams();
  const [selDate, setDate] = useState(null);
  
  // const { userData } = useUser();
  // const { tasks, setTasks } = useTasks();

  // const navigate = useNavigate();
  // const [error, setError] = useState(null);

  // const onDeleteTask = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await deleteCard({
  //       token: userData.token,
  //       id,
  //     });

  //     console.log("DELETE_CARD RESPONSE", response);

  //     setTasks(response.tasks);
  //     navigate(appRoutes.MAIN);
  //   } catch (error) {
  //     console.error(error.message);
  //     if (error.message === "Failed to fetch") {
  //       setError("Ошибка соединения");
  //       return;
  //     }
  //     setError(error.message);
  //   }
  // };

  return (
    <P.PopBrowse id="popBrowse">
      <P.PopBrowseContainer>
        <P.PopBrowseBlock>
          <P.PopBrowseContent>
            <P.PopBrowseTopBlock>
              <P.PopBrowseTtlH3>Название задачи {id}</P.PopBrowseTtlH3>
              <P.CategoriesThemeThemeTopOrangeActiveCategory>
                <PNC.OrangeP>Web Design</PNC.OrangeP>
              </P.CategoriesThemeThemeTopOrangeActiveCategory>
            </P.PopBrowseTopBlock>
            <P.Status>
              <P.StatusPSubttl>Статус</P.StatusPSubttl>
              <P.StatusThemes>
                <P.StatusThemeHide>
                  <P.StatusThemeP>Без статуса</P.StatusThemeP>
                </P.StatusThemeHide>
                <P.StatusThemeGray>
                  <P.StatusThemeGrayP>Нужно сделать</P.StatusThemeGrayP>
                </P.StatusThemeGray>
                <P.StatusThemeHide>
                  <P.StatusThemeP>В работе</P.StatusThemeP>
                </P.StatusThemeHide>
                <P.StatusThemeHide>
                  <P.StatusThemeP>Тестирование</P.StatusThemeP>
                </P.StatusThemeHide>
                <P.StatusThemeHide>
                  <P.StatusThemeP>Готово</P.StatusThemeP>
                </P.StatusThemeHide>
              </P.StatusThemes>
            </P.Status>
            <P.PopBrowseWrap>
              <P.PopBrowseForm id="formBrowseCard" action="#">
                <P.FormBrowseBlock>
                  <P.Label htmlFor="textArea01">
                    <PNC.Subttl>Описание задачи</PNC.Subttl>
                  </P.Label>
                  <P.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></P.FormBrowseArea>
                </P.FormBrowseBlock>
              </P.PopBrowseForm>
              <Calendar
                selDate={selDate}
                setDate={setDate}
              />
            </P.PopBrowseWrap>
            <P.ThemeDown>
              <P.CategoriesPSubttl>Категория</P.CategoriesPSubttl>
              <PNC.CategoriesThemeOrangeActive>
                <PNC.OrangeP>Web Design</PNC.OrangeP>
              </PNC.CategoriesThemeOrangeActive>
            </P.ThemeDown>
            <P.PopBrowseBtnBrowse>
              <P.BtnGroup>
                <P.BtnBrowseEditHover03>
                  <Link>
                    <Pu.LinkFontNoPrimary>
                      Редактировать задачу
                    </Pu.LinkFontNoPrimary>
                  </Link>
                </P.BtnBrowseEditHover03>
                <P.BtnBrowseDeleteHover03>
                {/* <P.BtnBrowseDeleteHover03 onClick={onDeleteTask}>                   */}
                  <Link>
                    <Pu.LinkFontNoPrimary>Удалить задачу</Pu.LinkFontNoPrimary>
                  </Link>
                </P.BtnBrowseDeleteHover03>
              </P.BtnGroup>
              <P.BtnBrowseCloseHover01 $primary>
                <Link to="/">
                  <Pu.LinkFontPrimary>Закрыть</Pu.LinkFontPrimary>
                </Link>
              </P.BtnBrowseCloseHover01>
            </P.PopBrowseBtnBrowse>
            <P.PopBrowseBtnEdit>
              <P.BtnGroup>
                <P.BtnEditEditHover01 $primary>
                  <Link>
                    <Pu.LinkFontPrimary>Сохранить</Pu.LinkFontPrimary>
                  </Link>
                </P.BtnEditEditHover01>
                <P.BtnEditEditHover03>
                  <Link>
                    <Pu.LinkFontNoPrimary>Отменить</Pu.LinkFontNoPrimary>
                  </Link>
                </P.BtnEditEditHover03>
                <P.BtnEditDeleteHover03 id="btnDelete">
                  <Link>
                    <Pu.LinkFontNoPrimary>Удалить задачу</Pu.LinkFontNoPrimary>
                  </Link>
                </P.BtnEditDeleteHover03>
              </P.BtnGroup>
              <P.BtnEditCloseHover01 $primary>
                <Link>
                  <Pu.LinkFontPrimary>Закрыть</Pu.LinkFontPrimary>
                </Link>
              </P.BtnEditCloseHover01>
            </P.PopBrowseBtnEdit>
          </P.PopBrowseContent>
        </P.PopBrowseBlock>
      </P.PopBrowseContainer>
    </P.PopBrowse>
  );
};

export default PopBrowse;
