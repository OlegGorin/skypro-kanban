import { useUser } from "../../../hooks/useUser";
import * as Pu from "./PopUser.styled";
import { Link } from "react-router-dom";

const PopUser = () => {
  const { onExit } = useUser();

  return (
    <Pu.PopExit>
      <Pu.PopExitContainer>
        <Pu.PopExitBlock>
          <Pu.PopExitTtl>Выйти из аккаунта?</Pu.PopExitTtl>
          {/* <Pu.PopExitForm action="#"> */}
          <Pu.PopExitForm>
            <Pu.PopExitFormGroup>
              <Pu.PopExitExitYesHover01Btn $primary>
                <Link to="/login">
                  <Pu.LinkFontPrimary onClick={onExit}>
                    Да, выйти
                  </Pu.LinkFontPrimary>
                </Link>{" "}
              </Pu.PopExitExitYesHover01Btn>
              <Pu.PopExitExitNoHover03Btn>
                <Link to="/">
                  <Pu.LinkFontNoPrimary>Нет, остаться</Pu.LinkFontNoPrimary>
                </Link>
              </Pu.PopExitExitNoHover03Btn>
            </Pu.PopExitFormGroup>
          </Pu.PopExitForm>
        </Pu.PopExitBlock>
      </Pu.PopExitContainer>
    </Pu.PopExit>
  );
};

export default PopUser;
