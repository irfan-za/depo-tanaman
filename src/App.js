import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import component
import Navs from "./component/Nav";
import Banner from "./component/Banner";
import About from "./component/About";
import Bibit from "./component/Bibit";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <Navs />
      <Banner />
      <About />
      <Bibit />
      <Contact />
    </div>
  );
}

export default App;
