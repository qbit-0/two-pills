import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useLocalStorage from 'use-local-storage'

function App() {
  const [res, setRes] = useState(JSON);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  useEffect(() => {

    const data = {
      link: "http://www.google.com",
      label: "a label"
    }
    const res = fetch("/api/boxes/1", {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => res.json())
    .then((data)=> setRes(data));
  },[])
  const toggleTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
  }
  return (
    <div className="App" data-theme={theme}>
      <button onClick={toggleTheme}>
        switch to {theme == 'light' ? 'dark' : 'light'}
      </button>
      {JSON.stringify(res)}
    </div>
  )
}

export default App
