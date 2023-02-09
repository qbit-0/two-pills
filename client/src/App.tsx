import { useState, useEffect } from "react";
import "./App.css";
import useLocalStorage from "use-local-storage";



function App() {
  const [res, setRes] = useState(JSON);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  useEffect(() => {
    const data = {
      link: "http://www.google.com",
      label: "a label",
    };
    const res = fetch("/api/boxes/1", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setRes(data));
  }, []);
  return (
    <div className="App" data-theme={theme}>
      <Navbar setTheme={setTheme} theme={theme} />
      <Body />
      {JSON.stringify(res)}
    </div>
  );
}

const Navbar = ({theme, setTheme}: any) => {
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
  return(
    <h1 className = "body-instruction">
      Two boxes in red and blue.<br/>
      Boxes were crafted by previous players.<br/>
      Each box will take you to a link.<br/>
      You may pick one to visit.<br/>
      The other will remain a mystery.<br/>
      Chose carefully...
    </h1>
  )
}
export default App;
