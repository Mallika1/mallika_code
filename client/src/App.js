import React from 'react';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import './style/style.css'

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
