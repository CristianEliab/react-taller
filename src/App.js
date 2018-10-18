import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import './owlcarousel.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Service from './components/Services/Service';
import Slider from './components/Slider/Slider';
import InicioSesion from './components/InicioSesion/InicioSesion';

class App extends Component {
  render() {  
    return (
      <div className="App">
        <Header></Header>
        <Slider></Slider>
        <InicioSesion></InicioSesion>
        <Service></Service>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
