import React from "react";
import Email from "./components/Email";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom"
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import littleMe from "./img/littleMe.jpg";

import "./App.css"
export default function App() {
  return (
    <>

      <Intro></Intro>
      <Skills></Skills>
      {/* <div class="myImage" style={{
        backgroundImage: `url(${littleMe})`,
        backgroundSize: "cover",
        height: "300px",
        width: "300px",
        marginLeft: "70%",
        color: "#f5f5f5"
      }}></div> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Email />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
};


