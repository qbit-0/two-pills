import { useState, useEffect } from "react";
import "@/App.css";
import useLocalStorage from "use-local-storage";
import Popup from "@/Popup";
function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  return (
    <div className="App" data-theme={theme}>
      <Navbar setTheme={setTheme} theme={theme} />
      <Body />
    </div>
  );
}

const Navbar = ({ theme, setTheme }: any) => {
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
    console.log(theme);
  };
  return (
    <nav id="nav">
      <div className="nav-title">Two Boxes</div>
      <button className="nav-color-toggle" onClick={toggleTheme}>
        ☀
      </button>
    </nav>
  );
};

const Body = () => {
  const [labels, setLabels] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [boxIndex, setBoxIndex] = useState<number>();
  useEffect(() => {
    fetch("/api/boxes/labels", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setLabels(data));
  }, []);

  const handleBoxClick = (id: number) => {
    setPopupOpen(true);
    setBoxIndex(id);
  };
  return (
    <div id="body">
      {popupOpen && <Popup setPopupOpen={setPopupOpen} id={boxIndex} />}
      <h1 className="body-instruction">
        Two boxes in
        <span className="text-red"> red</span> and{" "}
        <span className="text-blue">blue</span>.
        <br />
        Boxes were crafted by previous players.
        <br />
        Each box will take you to a link.
        <br />
        You may pick one to visit.
        <br />
        The other will remain a mystery.
        <br />
        Chose carefully...
      </h1>
      <div className="boxes-wrapper">
        <Box
          id={0}
          label={labels[0]}
          color={"blue"}
          handleBoxClick={handleBoxClick}
        />
        <div className="box-center-text">
          <div>OR</div>
        </div>
        <Box
          id={1}
          label={labels[1]}
          color={"red"}
          handleBoxClick={handleBoxClick}
        />
      </div>
    </div>
  );
};

type boxProps = {
  id: number;
  color: "red" | "blue";
  label: string;
  handleBoxClick: any;
};

const Box = ({ id, color, label, handleBoxClick }: boxProps) => {
  return (
    <button
      className={`box ${color}`}
      onClick={() => {
        handleBoxClick(id);
      }}
    >
      {label}
    </button>
  );
};

export default App;
