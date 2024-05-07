import Card from "../Card/Card"

const Column = ({ title }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">

        {title === "Без статуса"
        ? <Card category="Web Design" title="Название задачи" date="30.10.23" colorTheme="card__theme _orange" color="_orange" />
        : <Card category="Research" title="Название задачи" date="30.10.23" colorTheme="card__theme _green" color="_green" />}

        {title === "Без статуса"
        ? <Card category="Research" title="Название задачи" date="30.10.23" colorTheme="card__theme _green" color="_green" />
        : title === "В работе"
        ? <Card category="Copywriting" title="Название задачи" date="30.10.23" colorTheme="card__theme _purple" color="_purple" />
        : ""}
        
        {title === "Без статуса"
        ? <Card category="Web Design" title="Название задачи" date="30.10.23" colorTheme="card__theme _orange" color="_orange" />
        : title === "В работе"
        ? <Card category="Web Design" title="Название задачи" date="30.10.23" colorTheme="card__theme _orange" color="_orange" />
        : ""}

        {title === "Без статуса"
        ? <Card category="Copywriting" title="Название задачи" date="30.10.23" colorTheme="card__theme _purple" color="_purple" />
        : ""}

        {title === "Без статуса"
        ? <Card category="Web Design" title="Название задачи" date="30.10.23" colorTheme="card__theme _orange" color="_orange" />
        : ""}


      </div>
    </div>
  );
};

export default Column;
