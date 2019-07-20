import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import "./style/style.css"

const  App =() => {
  return (
    <div id="container">
      <Header> Code Development Project </Header>
      <Main/>
      <Footer> Download PDF Instructions </Footer>
    </div>
  );
}

export default App;
