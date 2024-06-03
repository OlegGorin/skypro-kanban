import * as Pu from "./PopUser.styled";
import { Link } from "react-router-dom";
import { removeUserFromLocalStorage } from "../../../lib/helper";
import { user } from "../../../App";

const PopUser = ({ setAuth, setUser }) => {

  const onExit = () => {
    removeUserFromLocalStorage(user);
    setUser(null);
    setAuth(false);
  };

  return (
    <Pu.PopExit>
      <Pu.PopExitContainer>
        <Pu.PopExitBlock>
          <Pu.PopExitTtl>Выйти из аккаунта?</Pu.PopExitTtl>
          <Pu.PopExitForm action="#">
            <Pu.PopExitFormGroup>
              <Pu.PopExitExitYesHover01Btn $primary>
                <Link to="/login">
                  <Pu.LinkExitExitYes onClick={onExit}>
                    Да, выйти
                  </Pu.LinkExitExitYes>
                </Link>{" "}
              </Pu.PopExitExitYesHover01Btn>
              <Pu.PopExitExitNoHover03Btn>
                <Link to="/">
                  <Pu.LinkExitExitNo>Нет, остаться</Pu.LinkExitExitNo>
                </Link>{" "}
              </Pu.PopExitExitNoHover03Btn>
            </Pu.PopExitFormGroup>
          </Pu.PopExitForm>
        </Pu.PopExitBlock>
      </Pu.PopExitContainer>
    </Pu.PopExit>
  );
};

export default PopUser;
