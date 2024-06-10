import { Link } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import * as PC from "./PopNewCard.styled";

const PopNewCard = () => {
  return (
    <PC.PopNewCard>
      <PC.PopNewCardContainer>
        <PC.PopNewCardBlock>
          <PC.PopNewCardContent>
            <PC.PopNewCardTtlH3>Создание задачи</PC.PopNewCardTtlH3>
            <Link to="#">
              <PC.PopNewCardClose>&#10006;</PC.PopNewCardClose>
            </Link>
            <PC.PopNewCardWrap>
              <PC.PopNewCardForm id="formNewCard" action="#">
                <PC.FormNewBlock>
                    Название задачи
                  <PC.Subttl htmlFor="formTitle">Название задачи</PC.Subttl>
                  <PC.FormNewInput
                    type="text"
                    name="name"
                    placeholder="Введите название задачи..."
                    autoFocus
                  ></PC.FormNewInput>
                </PC.FormNewBlock>
                <PC.FormNewBlock>
                  <PC.Subttl htmlFor="texArea">Описание задачи</PC.Subttl>
                  <PC.FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></PC.FormNewArea>
                </PC.FormNewBlock>
              </PC.PopNewCardForm>
              <Calendar />
            </PC.PopNewCardWrap>
            <PC.Categories>
              <PC.CategoriesPSubttl>Категория</PC.CategoriesPSubttl>
              <PC.CategoriesThemes>
                <PC.CategoriesThemeOrangeActivity>
                  <PC.OrangeP>Web Design</PC.OrangeP>
                </PC.CategoriesThemeOrangeActivity>
                <PC.CategoriesThemeGreen>
                  <PC.GreenP>Research</PC.GreenP>
                </PC.CategoriesThemeGreen>
                <PC.CategoriesThemePurple>
                  <PC.PurpleP>Copywriting</PC.PurpleP>
                </PC.CategoriesThemePurple>
              </PC.CategoriesThemes>
            </PC.Categories>
            <PC.FormNewCreateBtn $primary>
              Создать задачу
            </PC.FormNewCreateBtn>
          </PC.PopNewCardContent>
        </PC.PopNewCardBlock>
      </PC.PopNewCardContainer>
    </PC.PopNewCard>
  );
};

export default PopNewCard;
