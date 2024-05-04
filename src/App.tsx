import { useState } from "react";
import logo from "./assets/logos/full.png";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Derek's Dough Logo" />
      </div>
      <h1>Website is currently in the oven</h1>
      <div className="card">
        <p>Stay tuned for tasty updates!</p>
      </div>
    </>
  );
}

export default App;
