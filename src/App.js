
import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=fScFN41NdZDQMuXCI8C5AmgguCtcQh2qfMavhc1m`)
    .then(response => {
      setData(response.data);
      console.log(response.data)
    })
    .catch(error => {
      console.log(`error: ${error}`);
    })
  }

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Header title={data.title}/>
      <img src={data.url} alt="deep space"/>
      <p>{data.explanation}</p>;
      <Footer date={data.date} />
    </div>
  );
}



export default App;