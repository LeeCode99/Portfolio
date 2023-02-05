import React from "react";
import Email from "./components/Email";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css" 
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Email/>}></Route>
        </Routes>

        </BrowserRouter>
    </>
  )
}; 


