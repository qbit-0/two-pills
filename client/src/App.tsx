import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [res, setRes] = useState(JSON);
  useEffect(() => {
    const res = fetch("/api", {
      method: 'Get',
      headers: {
        'Content-type': 'application/json'
      },
    }).then((res) => res.json())
    .then((data)=> setRes(data));
  },[])
  
  return (
    <div className="App">
      {JSON.stringify(res)}
    </div>
  )
}

export default App
