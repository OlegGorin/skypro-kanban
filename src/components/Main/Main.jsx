import Column from "../Column/Column";
import { statusList } from "../../StatusList";
import * as S from "./Main.styled";
import { Container } from "../../global.styled";

const Main = ({ cardList }) => {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cardList.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
};

export default Main;
