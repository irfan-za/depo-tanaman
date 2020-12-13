import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import component
import Navs from "./component/Nav";
import Banner from "./component/Banner";
import About from "./component/About";
import Bibit from "./component/Bibit"
// import gambar
import Palete from "./img/a.png";

function App() {
  return (
    <div className="App">
      <Navs />
      <Banner />
      <About />
      <Bibit />
      <br />
      <br />
      sduhjagdf
      <img id="about" style={{ width: "100px" }} src={Palete} alt="" />
    </div>
  );
}

export default App;
