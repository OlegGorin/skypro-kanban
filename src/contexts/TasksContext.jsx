import { createContext, useState } from "react";

export const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const topicColor = (theme) => {
    switch (theme) {
      case "Web Design":
        return "_orange";
      case "Research":
        return "_green";
      case "Copywriting":
        return "_purple";
      default:
        return "_gray";
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, topicColor }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
