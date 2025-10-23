import { Component, useState } from "react";

import viteLogo from "/amazon.jpg";
import "./App.css";
import Carousels from "./Components/carousels.jsx";
import Header from "./Components/header.jsx";
function App() {
  return (
    <>
      <Header />
      <Carousels />
    </>
  );
}

export default App;
