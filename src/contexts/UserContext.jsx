import { createContext, useState } from "react";

export const UserContext = createContext(null);

const getUserFromLocalStorage = () => {
  const userInfo = localStorage.getItem("user");
  return userInfo ? JSON.parse(userInfo) : null;
};

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(getUserFromLocalStorage());

  const onExit = () => {
    localStorage.removeItem("user");
    setUserData(null);
    
  };

  const setUser = (newUser) => {
    setUserData(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  return (
    <UserContext.Provider value={{ userData, onExit, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
