import logo from "./assets/logos/full.png";
import mascot from "./assets/logos/mascot.svg";
import "./App.scss";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Derek's Dough Logo" />
      </div>
      <h1>Website is currently in the oven</h1>
      <div className="card">
        <p>Stay tuned for tasty updates!</p>
      </div>
      <div className="scroll-right">
        <div className="inner">
          <img src={mascot} className="mascot" alt="Derek's Dough Mascot" />
        </div>
      </div>
    </>
  );
}

export default App;
