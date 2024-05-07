import "./App.css";
import PopUser from "./components/Popups/PopUser";
import PopNewCard from "./components/Popups/PopNewCard";
import PopBrowse from "./components/Popups/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
}

export default App;
