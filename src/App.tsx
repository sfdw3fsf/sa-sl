import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Hi(num: any, string) {
  const h = num + string;
}

function App() {
  const [color, setC] = useState();
  const [t, setT] = useState(false);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Switzland Service greet you !</h1>
    </>
  );
}

export default App;
