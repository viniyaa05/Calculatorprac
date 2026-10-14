import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(String(Function('"use strict"; return (' + input + ')')()));
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div>
      <h2>Calculator</h2>

      <input type="text" value={input} readOnly />
      <br /><br />

      <button onClick={clear}>C</button>
      <button onClick={deleteLast}>DEL</button>
      <button onClick={() => handleClick("/")}>/</button>
      <button onClick={() => handleClick("*")}>*</button>
      <br />

      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button onClick={() => handleClick("-")}>-</button>
      <br />

      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleClick("+")}>+</button>
      <br />

      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
      <br />

      <button onClick={() => handleClick("0")}>0</button>
      <button onClick={() => handleClick(".")}>.</button>
      <button onClick={calculate}>=</button>
    </div>
  );
}

export default App;