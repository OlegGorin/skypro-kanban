import PopUser from "../../components/Popups/PopUser/PopUser";
import { useUser } from "../../hooks/useUser";

export const ExitPage = () => {
  const { onExit } = useUser();
  return <PopUser onExit={onExit} />;
};

export default ExitPage;
