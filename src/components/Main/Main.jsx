import Column from "../Column/Column";
import { useEffect, useState } from "react";

const Main = ({ cardList }) => {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {isLoading &&
              <p>Данные загружаются...</p>
            }
            {!isLoading &&
            statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cardList.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
