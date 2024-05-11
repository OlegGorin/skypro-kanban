import { useState } from "react";

const Header = ({ setCards, cards }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  }

  const onCardAdd = () => {
    const newCard = {
      id: Date.now(),
      title: "TEST",
      topic: "Research",
      date: "12.05.24",
      status: "Без статуса"
    };
    const newCardList = [...cards, newCard];
    setCards(newCardList);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="../public/logo.png" alt="logo"></img>
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="../public/logo_dark.png" alt="logo"></img>
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" onClick={onCardAdd}>
              Создать новую задачу
            </button>
            <div className="header__user _hover02" onClick={handleOpen}>
              Ivan Ivanov
            </div>
            {isOpen && (
            <div className="header__pop-user-set pop-user-set">
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                ></input>
              </div>
              <button type="button" className="_hover03">
                <a href="#popUser">Выйти</a>
              </button>
            </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
