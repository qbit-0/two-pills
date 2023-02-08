import TestComponent from "@/components/TestComponent";
import { useEffect, useState } from "react";

function App() {
  const [res, setRes] = useState(JSON);
  useEffect(() => {
    // const res = fetch("/api/boxes/link/1", {
    //   method: 'Get',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    const data = {
      link: "a link",
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

  return <div className="App">{JSON.stringify(res)}</div>;
}

export default App;
