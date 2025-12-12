import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="parent">
      {/* Parent Component label */}
      <h1>Parent Component</h1>

      {/* Display selected option in <p> */}
      <p>{selectedOption}</p>

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
