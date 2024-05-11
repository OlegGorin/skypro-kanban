// import { cardList } from "../../../data";
import Card from "../Card/Card"

const Column = ({ title, cardList }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map(({id, topic, title, date}) =>
        <Card 
          key={id}
          topic={topic}
          title={title}
          date={date}
        />
        )}
        {/* {status === "Без статуса"
        ? <Card category="Web Design" title="Название задачи" date="30.10.23" colorTheme="card__theme _orange" color="_orange" />
        : <Card category="Research" title="Название задачи" date="30.10.23" colorTheme="card__theme _green" color="_green" />}

        {status === "Без статуса"
        ? <Card category="Research" title="Название задачи" date="30.10.23" colorTheme="card__theme _green" color="_green" />
        : status === "В работе"
        ? <Card category="Copywriting" title="Название задачи" date="30.10.23" colorTheme="card__theme _purple" color="_purple" />
        : ""}
        
        {status === "Без статуса"
        ? <Card category="Web Design" title="Название задачи" date="30.10.23" colorTheme="card__theme _orange" color="_orange" />
        : status === "В работе"
        ? <Card category="Web Design" title="Название задачи" date="30.10.23" colorTheme="card__theme _orange" color="_orange" />
        : ""}

        {status === "Без статуса"
        ? <Card category="Copywriting" title="Название задачи" date="30.10.23" colorTheme="card__theme _purple" color="_purple" />
        : ""}

        {status === "Без статуса"
        ? <Card category="Web Design" title="Название задачи" date="30.10.23" colorTheme="card__theme _orange" color="_orange" />
        : ""} */}


      </div>
    </div>
  );
};

export default Column;
