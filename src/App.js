import React from "react";
import Email from "./components/Email";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom"
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Snowfall from 'react-snowfall'
// import littleMe from "./img/littleMe.jpg";

import "./App.css"
export default function App() {

  return (
    <>
      <Snowfall
        color="white"
        snowflakeCount={100}
      />
      <Intro></Intro>
      <Skills></Skills>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Email />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
};


