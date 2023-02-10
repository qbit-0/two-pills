import { useState, useEffect } from "react";
import "@/App.css";
import useLocalStorage from "use-local-storage";

function App() {
  const [res, setRes] = useState(JSON);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  return (
    <div className="App" data-theme={theme}>
      <Navbar setTheme={setTheme} theme={theme} />
      <Body />
      {JSON.stringify(res)}
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
  const [ labels, setLabels ] = useState([]);
  useEffect(() => {
    fetch("/api/boxes/labels", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setLabels(data));
  }, []);
  return (
    <body id="body">
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
        <Box label={labels[0]} color={"blue"} />
        <div className="box-center-text">
          <div>OR</div>
        </div>
        <Box label={labels[1]} color={"red"} />
      </div>
    </body>
  );
};

type boxProps = {
  color: "red" | "blue";
  label: string;
};

const Box = ({ color, label }: boxProps) => {
  return <button className={`box ${color}`}>{label}</button>;
};

export default App;
