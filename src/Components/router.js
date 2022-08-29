import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TechPage from "./MainPage";
import MainPage from "./MainPage";
import NewPage from "./NewPage";

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path={"/main"} element={<MainPage/>}></Route>
        <Route path={"/tech"} element={<TechPage/>}></Route>
        <Route path={"/new"} element={<NewPage/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}