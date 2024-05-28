// import { cardList } from "../../../data";
import Card from "../Card/Card";
import * as C from "./Column.styled";
import { Cards } from "../Card/Card.styled";

const Column = ({ title, cardList }) => {
  return (
    <C.MainColumn>
      <C.ColumnTitle>
        <C.Title>{title}</C.Title>
      </C.ColumnTitle>
      <Cards>
        {cardList.map(({ id, topic, title, date }) => (
          <Card key={id} topic={topic} title={title} date={date} id={id} />
        ))}
      </Cards>
    </C.MainColumn>
  );
};

export default Column;
