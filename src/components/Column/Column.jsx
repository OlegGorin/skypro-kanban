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
        {/* {cardList.map(({ id, topic, title, date }) => ( */}
        {cardList.map((card) => (          
          <Card 
            key={card._id}
            topic={card.topic}
            title={card.title}
            date={card.date}
            id={card._id}
          />
        ))}
      </Cards>
    </C.MainColumn>
  );
};

export default Column;
