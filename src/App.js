import React from "react";
import ApodList from "./components/ApodList";
import "./App.css";


function App() {
  return (
    <div className="App">
       <h1>Photo Of The Day</h1>
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>
      <ApodList/>
    </div>
  );
}

export default App;
