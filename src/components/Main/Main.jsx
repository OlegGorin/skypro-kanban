import Column from "../Column/Column";
import { useEffect, useState } from "react";
import { statusList } from "../../../StatusList";
import * as S from "./Main.styled";
import { Container } from "../../global.styled";

const Main = ({ cardList }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {isLoading ? (
              <S.DataLoading>Данные загружаются...</S.DataLoading>
            ) : (
              statusList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cardList={cardList.filter((card) => card.status === status)}
                />
              ))
            )}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
};

export default Main;
