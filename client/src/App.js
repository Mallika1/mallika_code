import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
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
