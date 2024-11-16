import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Section from './Components/About-section/Section';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';
import Project from './Components/Projects/Project';
import ScrollAnimation from './Components/ScrollAnimation/ScrollAnimation';

function App() {
  return (
    <div className="app">
      {/* Wrap all your content inside ScrollAnimation */}
      <ScrollAnimation /> 
      <div id="wrapper"> {/* This is the smooth scrolling wrapper */}
        <div id="content"> {/* Content goes here */}
          <Header />
          <Hero />
          <Section />
          <Skills />
          <Services />
          <Project />
          <Form />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
