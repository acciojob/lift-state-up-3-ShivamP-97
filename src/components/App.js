import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Parent state

  return (
    <div className="parent">
      <h1>Selected Option: {selectedOption || "None"}</h1>

      {/* ChildComponent1 */}
      <div>
        <button onClick={() => setSelectedOption("Option 1")}>
          Select Option 1
        </button>
      </div>

      {/* ChildComponent2 */}
      <div>
        <button onClick={() => setSelectedOption("Option 2")}>
          Select Option 2
        </button>
      </div>
    </div>
  );
};

export default App;
