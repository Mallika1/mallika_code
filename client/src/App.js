/*
==================================================
 @<COPYRIGHT>@
==================================================
 File description:
    This is App functional component. This component renders header main and foorter
    component.

    File   : src/App.js
    Component : App

=============================================================
 date            name                  description of change

 07/23/2019      Mallika Chakraborty    Initial cration
=============================================================*/
import React from "react";
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import "./style/style.css"

const  App =() => {
  return (
    <div id="container">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
