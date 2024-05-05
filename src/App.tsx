import Nav from "./components/Nav";
import "./App.scss";

import mascot from "./assets/logos/mascot.svg";
import oven from "./assets/icons/oven.svg";

function App() {
  return (
    <>
      <Nav />
      <div className="content">
        <img src={oven} className="oven" alt="oven" />
        <h1>Website is currently in the oven</h1>
        <div className="card">
          <p>Stay tuned for tasty updates!</p>
        </div>
        <div className="scroll-right">
          <div className="inner">
            <img src={mascot} className="mascot" alt="Derek's Dough Mascot" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
