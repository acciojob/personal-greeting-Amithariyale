
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [greet, setGreet] = useState("");
  const greetFnc = (e) => {
    setGreet(`Hello ${e.target.value}!`);
  };
  return (
    <div>
      {/* Do not remove the main div */}
      <label>Enter your name:</label>
      <input onChange={greetFnc} type="text" />
      <p>{greet}</p>
    </div>
  );
};

export default App;
