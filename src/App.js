
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Section from './Components/About-section/Section';
import Skills from './Components/Skills/Skills';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';

import Project from './Components/Projects/Project';



function App() {


  return (



<div className="app" >
 {/*     <h1>hello world</h1>{/**for testing purposes */} 
     <Header/>
     <Hero/>
     <Section/>
     <Skills/>
    <Project/>
     <Form/>
     <Footer/>
    </div>



   );
}

export default App;
