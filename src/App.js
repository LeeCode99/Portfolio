import React from "react";
import Email from "./components/Email";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Link} from "react-router-dom";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Snowfall from 'react-snowfall'



// import littleMe from "./img/littleMe.jpg";
import Languages from "./components/Languages";
import "./App.css"
export default function App() {

  return (
    <>
    
      <Snowfall
        color="pink"
        snowflakeCount={120}
        style={{ zIndex: 1 }}

      />
      

      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<><Intro/><Skills/><Email/></>}></Route>
          <Route path="/lan" element={<Languages />}></Route>
        </Routes>
        <Link className="LinkToLan" to='/lan'>Languages</Link>
      </BrowserRouter>
     
    </>
  )
};


