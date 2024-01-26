// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     console.log('hello');
//     return (
//       <h1>backroads app</h1>
//     );
//   }
// }

import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Tours from './components/Tours.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Tours></Tours>
      <Footer></Footer>
    </React.Fragment >
  );
}

export default App;
