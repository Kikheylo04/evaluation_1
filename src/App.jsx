import logo from "./logo.svg";
import "./App.css";
import "./sass/index.scss"
import { QuotexBox } from "./components/QuotexBox";
import { FaAngleRight } from "react-icons/fa";
import quotes from "./data/quotes.json";
import { useState } from "react";

function App() {
  const random = Math.floor(Math.random() * quotes.length);
  const [number, setNumber] = useState(random);
  document.body.style.backgroundColor = quotes[number].color;
  const change = () => {
    const newRandom = Math.floor(Math.random() * quotes.length);
    setNumber(newRandom);
  };
  return (
      <div className="App">
        <div className="App__card">
          <div className="App__card__data">
          <QuotexBox information={quotes[number]} />
        </div>
        <div className="App__card__button">
          <button onClick={change} style={{ background: quotes[number].color }}>
            <FaAngleRight />
          </button>
        </div>
        </div>
        
      </div>
  );
}

export default App;
